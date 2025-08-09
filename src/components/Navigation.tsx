import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link
} from "@nextui-org/react";
import { Brain } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-background/95 backdrop-blur-sm border-b border-divider"
      maxWidth="full"
    >
      {/* Logo */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-center space-x-2">
            <div className="p-2 gradient-primary rounded-xl">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">ResumeAI</span>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link 
            href="#features" 
            className="text-foreground-500 hover:text-foreground transition-colors"
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="#how-it-works" 
            className="text-foreground-500 hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="#pricing" 
            className="text-foreground-500 hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop Actions */}
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            color="primary" 
            size="sm"
            className="bg-gradient-to-r from-primary-500 to-secondary-500"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/95 backdrop-blur-sm">
        <NavbarMenuItem>
          <Link
            href="#features"
            size="lg"
            className="text-foreground-600 hover:text-foreground"
          >
            Features
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="#how-it-works"
            size="lg"
            className="text-foreground-600 hover:text-foreground"
          >
            How It Works
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            href="#pricing"
            size="lg"
            className="text-foreground-600 hover:text-foreground"
          >
            Pricing
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pt-4">
          <div className="flex flex-col space-y-2 w-full">
            <Button variant="ghost" className="justify-start">
              Sign In
            </Button>
            <Button 
              color="primary" 
              className="justify-start bg-gradient-to-r from-primary-500 to-secondary-500"
            >
              Get Started
            </Button>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;