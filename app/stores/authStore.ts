import { defineStore } from "pinia";
import type { Customer } from "@/types";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const customer = ref<Customer | null>(null);

    const login = async (email: string, password: string) => {
      const config = useRuntimeConfig();
      try {
        const res = await $fetch<Customer>(
          `${config.public.apiUri}api/customers/connect`,
          {
            method: "POST",
            body: { email, password },
            cache: "no-cache",
          }
        );
        customer.value = res;
        return true;
      } catch (err) {
        customer.value = null;
        console.error("Login error:", err);

        // Renvoie le message de l'API si dispo
        if (err?.response?._data?.error) {
          throw new Error(err.response._data.error);
        }

        throw new Error("Une erreur est survenue lors de la connexion.");
      }
    };

    const register = async (email: string, password: string, firstname: string, lastname: string) => {
      const config = useRuntimeConfig();
      try {
        const res = await $fetch<Customer>(
          `${config.public.apiUri}api/customers/register`,
          {
            method: "POST",
            body: { email, password, firstname, lastname },
            cache: "no-cache",
          }
        );
        customer.value = res;
        return true;
      } catch (err) {
        customer.value = null;
        console.error("Login error:", err);

        // Renvoie le message de l'API si dispo
        if (err?.response?._data?.error) {
          throw new Error(err.response._data.error);
        }

        throw new Error("Une erreur est survenue lors de la connexion.");
      }
    };

    const logout = () => {
      customer.value = null;
    };

    return {
      customer,
      login,
      register,
      logout,
    };
  },
  {
    persist: {
      key: "pinia_state_auth",
      paths: ["customer"],
    },
  }
);
