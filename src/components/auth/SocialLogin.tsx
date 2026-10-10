
"use client";

import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  async function handleSocialLogin(
    provider: "google" | "github"
  ) {
    try {
      const result = await signIn.social({
        provider,
        callbackURL: "/",
      });

      if (result.error) {
        toast.error(
          result.error.message ?? "Login করা যায়নি।"
        );
      }
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করো।");
    }
  }

  return (
    <div className="mt-5 space-y-3">
      {/* Divider */}
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-sm text-gray-500">
            অথবা
          </span>
        </div>
      </div>

      {/* Google Login */}
      <button
        type="button"
        onClick={() => handleSocialLogin("google")}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
      >
        <FcGoogle size={22} />
        <span>Google দিয়ে Continue করো</span>
      </button>

      {/* GitHub Login */}
      <button
        type="button"
        onClick={() => handleSocialLogin("github")}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
      >
        <FaGithub size={22} />
        <span>GitHub দিয়ে Continue করো</span>
      </button>
    </div>
  );
}

