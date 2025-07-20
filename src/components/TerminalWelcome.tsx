import { Code, Coffee, Cpu, Database } from "lucide-react";

const TerminalWelcome = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-prompt mb-6">
            <span className="text-accent font-mono text-lg glow-text">welcome --verbose</span>
          </div>
          
          <div className="space-y-4 mb-12">
            <div className="terminal-output">
              <p className="text-lg leading-relaxed">
                A minimal tech blog exploring the depths of software development, 
                system architecture, and the art of clean code.
              </p>
            </div>
            
            <div className="terminal-output">
              <p className="text-muted-foreground">
                Writing about web development, DevOps, databases, and everything 
                that makes computers tick.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Code, label: "Development" },
              { icon: Database, label: "Databases" },
              { icon: Cpu, label: "Architecture" },
              { icon: Coffee, label: "Best Practices" }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center group">
                <div className="bg-secondary rounded-lg p-4 mb-3 group-hover:bg-secondary/80 transition-colors">
                  <Icon className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalWelcome;