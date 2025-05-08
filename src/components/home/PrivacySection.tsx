
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, FileCheck } from "lucide-react";

const PrivacySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Your Privacy Is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground">
            YardMatters facilitates secure collaborations without exposing your personal details
            or sensitive documents to other parties.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-background/50 backdrop-blur border-brand-100 hover:shadow-md transition-all">
            <CardContent className="pt-6">
              <div className="mb-5 h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center">
                <Shield className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy Protected</h3>
              <p className="text-muted-foreground">
                Your contact details remain private. Communication happens through our secure platform.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 backdrop-blur border-brand-100 hover:shadow-md transition-all">
            <CardContent className="pt-6">
              <div className="mb-5 h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center">
                <Users className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mediated Engagement</h3>
              <p className="text-muted-foreground">
                Our team reviews all proposals and facilitates introductions only after mutual interest.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 backdrop-blur border-brand-100 hover:shadow-md transition-all">
            <CardContent className="pt-6">
              <div className="mb-5 h-12 w-12 rounded-lg bg-brand-50 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Document Security</h3>
              <p className="text-muted-foreground">
                Documents are verified by YardMatters but never shared directly without your permission.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
