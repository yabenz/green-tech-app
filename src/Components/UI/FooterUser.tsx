
export default function Footer() {
    return (
        <footer>
            <div className="px-4 sm:px-6 py-8 border-t-1">
                <div className="flex flex-col sm:flex-row justify-between  sm:space-y-0 pt-4">
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
