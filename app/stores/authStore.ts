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
        return false;
      }
    };

    const logout = () => {
      customer.value = null;
    };

    return {
      customer,
      login,
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
