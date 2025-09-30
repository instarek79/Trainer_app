import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Camera, Bell, Moon, Sun } from "lucide-react";

const Settings = () => {
  const [name, setName] = useState("Zeinab");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // save settings (API call, localStorage, etc.)
    console.log({
      name,
      profileImage,
      darkMode,
      notifications,
    });
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">User Settings</h1>
      <p className="text-muted-foreground">
        Manage your profile, theme, and notification preferences.
      </p>

      {/* Profile Card */}
      <Card className="p-6 space-y-6">
        <h2 className="text-xl font-semibold">Profile</h2>
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={
                profileImage ||
                "https://via.placeholder.com/100x100.png?text=Avatar"
              }
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <label className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer">
              <Camera className="w-4 h-4" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <div className="flex-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
      </Card>

      {/* Preferences */}
      <Card className="p-6 space-y-6">
        <h2 className="text-xl font-semibold">Preferences</h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon className="w-5 h-5 text-muted-foreground" />
            <span>Dark Mode</span>
          </div>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>

        <Separator />
{/* 
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span>Enable Notifications</span>
          </div>
          <Switch checked={notifications} onCheckedChange={setNotifications} />
        </div> */}
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} className="px-6">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Settings;
