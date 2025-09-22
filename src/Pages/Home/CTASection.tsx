import Button from "@/Components/UI/Btn"
import { Card, CardContent } from "@/Components/UI/Card"
import { Input } from "@/Components/UI/input"
import { Textarea } from "@/Components/UI/textarea"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Transform Your Battery Factory?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 text-pretty">
            Schedule a consultation with our experts and discover how our smart manufacturing platform can optimize your
            production processes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Get Your Free Consultation</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className=" border-border" />
                    <Input placeholder="Last Name" className=" border-border" />
                  </div>
                  <Input type="email" placeholder="Work Email" className=" border-border" />
                  <Input placeholder="Company Name" className=" border-border" />
                  <Input placeholder="Phone Number" className=" border-border" />
                  <Textarea
                    placeholder="Tell us about your current challenges and goals..."
                    rows={4}
                    className="border-border bg-primary/10 "
                  />

                  <Button label="Start free trial" variant="primary" onClick={() => alert('Secondary clicked')} className="flex justify-center w-full" />

                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-foreground mb-2">Free Factory Assessment</h4>
                  <p className="text-primary-foreground/80">
                    Our experts will analyze your current processes and identify optimization opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-foreground mb-2">Custom ROI Projection</h4>
                  <p className="text-primary-foreground/80">
                    Get a detailed analysis of potential cost savings and efficiency improvements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-foreground mb-2">Implementation Roadmap</h4>
                  <p className="text-primary-foreground/80">
                    Receive a step-by-step plan for integrating our platform into your operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
