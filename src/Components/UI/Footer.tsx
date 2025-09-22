
import { Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary">GreenTech</h3>
                        <p className="text-muted-foreground text-pretty">
                            Leading the future of smart battery manufacturing with AI-powered optimization and intelligent automation
                            solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Solutions</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Production Optimization
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Quality Management
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Energy Efficiency
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Predictive Maintenance
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    News & Events
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Case Studies
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">info@greentechio.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">+49 123 456 78</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                    123 Innovation Drive
                                    <br />
                                    Frankfurt am Main, 60344
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <line />

                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 pt-4">
                    <div className="text-muted-foreground text-sm">© 2025 GreenTechIO. All rights reserved.</div>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
