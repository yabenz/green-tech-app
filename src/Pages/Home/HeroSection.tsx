import { Zap, TrendingUp, Shield } from "lucide-react"
import Button from "@/Components/UI/Button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-18 lg:py-24" >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(3,36,252,0.1),transparent_50%)]"></div>

      <div className="container relative mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-10 ">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/30 text-sm font-medium text-primary mb-6 shadow-sm">
                <Zap className="h-4 w-4" />
                Next-Gen Battery Analytics
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-[1.1] tracking-tight">
                Optimize Your{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text">
                  Smart Battery
                </span>{" "}
                Factory
              </h1>
              <p className="text-md text-muted-foreground leading-relaxed max-w-2xl">
                Transform your battery manufacturing with AI-powered analytics, real-time sustainability monitoring, and
                data-driven insights that reduce waste and maximize efficiency.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-1">
              <Button label="Watch Demo" variant="primary" onClick={() => alert('Secondary clicked')} className= "px-6 py-3"/>
              <Button label="Start free trial" variant="secondary" onClick={() => alert('Secondary clicked')} className= "px-6 py-3"/>
            </div>

            <div className="grid grid-cols-3 gap-6 p-3">
              <div className="text-center p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground font-medium">Efficiency Boost</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-1">45%</div>
                <div className="text-sm text-muted-foreground font-medium">Waste Reduction</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground font-medium">Live Monitoring</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 p-1 border border-primary/10">
              <img
                src="/public/images/1981-digital-bf9sZBcGQl4-unsplash.jpg"
                alt="Modern battery factory with sustainable technology"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />

              <div className="absolute -bottom-8 -right-8 bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Live Production</div>
                    <div className="text-xs text-muted-foreground">Real-time Analytics</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
