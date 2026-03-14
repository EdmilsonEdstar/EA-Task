"use client";

import { useState } from "react";
import Dashboard from "@/components/layout/Dashboard";

export default function Settings() {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [notifications, setNotifications] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const saveSettings = () => {
    // Aqui normalmente chamarias API para salvar
    alert("Settings saved!");
  };

  return (
    <Dashboard>
      <div className="px-6 py-4 space-y-6">

        <h1 className="text-2xl font-bold">Settings</h1>

        {/* Profile */}
        <div className="bg-white shadow p-6 rounded-md space-y-4 animate-modal-pop delay-75">
          <h2 className="text-lg font-semibold">Profile</h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input aria-label="c"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input aria-label="c"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white shadow p-6 rounded-md space-y-4 animate-modal-pop delay-150">
          <h2 className="text-lg font-semibold">Preferences</h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span>Theme</span>
              <select aria-label="c"
                value={theme}
                onChange={(e) => setTheme(e.target.value as "light" | "dark")}
                className="border px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span>Enable Notifications</span>
              <input aria-label="c"
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="h-5 w-5 accent-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white shadow p-6 rounded-md space-y-4 animate-modal-pop delay-75">
          <h2 className="text-lg font-semibold">Security</h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input aria-label="c"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input aria-label="c"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={saveSettings}
            className="px-6 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </Dashboard>
  );
}
