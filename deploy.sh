#!/bin/bash
set -e

# Charger config si .env.deploy existe
if [ -f .env.deploy ]; then
  export $(grep -v '^#' .env.deploy | xargs)
fi

APP_NAME=${APP_NAME:-"linos-front"}
API_BASE=${API_BASE:-"https://api.your.store"}
APP_DIR=${APP_DIR:-"/var/www/linos-front"}

echo "Déploiement de $APP_NAME"

cd $APP_DIR

echo "Git pull..."
git pull origin main

echo "Installation deps..."
pnpm install --prod --frozen-lockfile

echo "Build Nuxt avec API_BASE=$API_BASE"
API_BASE=$API_BASE pnpm run build

echo "Restart PM2..."
pm2 delete $APP_NAME || true
pm2 start ecosystem.config.cjs --env production --name $APP_NAME

echo "Déploiement terminé"
