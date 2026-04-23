import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { LogOut, User } from "lucide-react";
import logo from "../assets/tvscredit-logo.png";
import EIRIncomeProjectionTool from "../EIRIncomeProjectionTool.jsx";

const HomePage = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-background to-muted">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-1.5 w-full" style={{ background: "var(--tvs-gradient)" }} />
        <div className="bg-white border-b border-border px-6 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="TVS Credit Service Ltd" className="h-10 object-contain" />
              <span className="text-lg font-semibold text-tvs-blue tracking-wide">
                EIR Income Projection
              </span>
            </div>

            {/* User Dropdown */}
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 px-3 py-2 h-auto">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-tvs-blue text-white text-sm">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-foreground">{user}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={onLogout} className="text-destructive cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>

      {/* Main Content with padding for fixed header */}
      <div className="pt-24 px-4 pb-6">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-tvs-blue/5" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-tvs-green/5" />
        </div>

        <div className="relative">
          <EIRIncomeProjectionTool />
        </div>
      </div>
    </div>
  );
};

export default HomePage;