import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, AlertTriangle, Download, Github, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Technical Professional
 * - Clean, geometric layout with Prussian blue primary color
 * - Orange accents for critical elements and CTAs
 * - IBM Plex Sans for body text, IBM Plex Mono for headings
 * - Fira Code for technical content
 * - Emphasis on clarity, precision, and professional appearance
 */

export default function Home() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (step: number) => {
    setExpandedStep(expandedStep === step ? null : step);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-mono font-bold text-lg">∞</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Infinix NOTE 50X 5G</h1>
              <p className="text-xs text-muted-foreground">Bootloader Unlock Guide</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#warnings" className="text-sm hover:text-primary transition">
              Warnings
            </a>
            <a href="#steps" className="text-sm hover:text-primary transition">
              Steps
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Unlock Your <span className="text-accent">Infinix NOTE 50X 5G</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Complete guide to unlocking the bootloader and gaining root access to your device. Follow each step carefully to ensure success.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="/images/hero-bootloader.png"
                alt="Bootloader Unlock Illustration"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warnings Section */}
      <section id="warnings" className="py-16 bg-destructive/5 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              Critical Warnings
            </h3>
            <p className="text-muted-foreground">
              Please read and understand these warnings before proceeding. Ignoring them may result in permanent damage to your device.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Data Loss",
                description:
                  "Unlocking the bootloader will perform a factory reset and erase ALL data on your device including apps, photos, messages, and contacts.",
                icon: "📱",
              },
              {
                title: "Warranty Void",
                description:
                  "This process may void your device warranty with Infinix. Once unlocked, the manufacturer may refuse to provide support.",
                icon: "⚖️",
              },
              {
                title: "Security Risks",
                description:
                  "Disabling verified boot reduces your device's security. Your device becomes more vulnerable to malware and unauthorized access.",
                icon: "🔓",
              },
            ].map((warning, idx) => (
              <Card key={idx} className="p-6 border-destructive/30 bg-destructive/5">
                <div className="text-3xl mb-4">{warning.icon}</div>
                <h4 className="font-bold text-lg mb-2">{warning.title}</h4>
                <p className="text-sm text-muted-foreground">{warning.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-destructive/10 border border-destructive/30 rounded-lg">
            <p className="font-mono text-sm">
              <strong>Backup your data:</strong> Before proceeding, create a complete backup of all important files, photos, and data using Google Drive, cloud storage, or a computer.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-primary" />
            Step-by-Step Guide
          </h3>

          <div className="space-y-4">
            {[
              {
                number: 1,
                title: "Enable Developer Options",
                description: "Access hidden developer settings on your device",
                details: [
                  "Go to Settings → About Phone",
                  "Scroll down and find 'Build Number'",
                  "Tap on Build Number 7 times rapidly",
                  "You should see a message: 'You are now a developer!'",
                  "Go back to Settings → System → Developer Options",
                ],
              },
              {
                number: 2,
                title: "Enable USB Debugging & OEM Unlock",
                description: "Enable debugging and OEM unlock options",
                details: [
                  "In Developer Options, find 'USB Debugging' and toggle it ON",
                  "Find 'OEM Unlocking' and toggle it ON",
                  "You may need to connect to the internet for verification",
                  "If OEM Unlocking is grayed out, restart your device and try again",
                ],
              },
              {
                number: 3,
                title: "Connect to Computer & Enter Fastboot",
                description: "Prepare your device for bootloader unlock",
                details: [
                  "Connect your device to your computer using a USB cable",
                  "Open Command Prompt or Terminal on your computer",
                  "Type: adb devices (to verify connection)",
                  "Type: adb reboot bootloader",
                  "Your device will reboot into Fastboot mode",
                ],
              },
              {
                number: 4,
                title: "Unlock the Bootloader",
                description: "Execute the bootloader unlock command",
                details: [
                  "In the command prompt, type: fastboot devices",
                  "Verify your device appears in the list",
                  "Type: fastboot flashing unlock",
                  "On your device, use volume buttons to select 'Unlock the bootloader'",
                  "Press the power button to confirm",
                  "Your device will reboot and perform a factory reset",
                ],
              },
              {
                number: 5,
                title: "Install Magisk for Root",
                description: "Gain superuser privileges (optional)",
                details: [
                  "Download Magisk APK from the official repository",
                  "Extract boot.img from the firmware",
                  "Use Magisk Manager to patch boot.img",
                  "Flash the patched image: fastboot flash boot magisk_patched.img",
                  "Reboot your device",
                  "Install BootloopSaver module as first safety measure",
                ],
              },
            ].map((step) => (
              <Card
                key={step.number}
                className="overflow-hidden border-primary/20 hover:border-primary/40 transition cursor-pointer"
                onClick={() => toggleStep(step.number)}
              >
                <div className="p-6 flex items-start gap-4 bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="text-muted-foreground">{expandedStep === step.number ? "−" : "+"}</div>
                </div>

                {expandedStep === step.number && (
                  <div className="px-6 pb-6 pt-0 border-t border-border bg-muted/30">
                    <ol className="space-y-3 font-mono text-sm">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-primary font-bold flex-shrink-0">{idx + 1}.</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-primary" />
            Important Notes
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-primary/20">
              <h4 className="font-bold mb-3">Before Starting</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Backup all important data</li>
                <li>✓ Ensure device battery is above 70%</li>
                <li>✓ Use an original USB cable</li>
                <li>✓ Install latest ADB and Fastboot tools</li>
                <li>✓ Read all steps carefully</li>
              </ul>
            </Card>

            <Card className="p-6 border-accent/20">
              <h4 className="font-bold mb-3">After Unlocking</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Device will perform factory reset</li>
                <li>✓ All data will be erased</li>
                <li>✓ Device may take longer to boot initially</li>
                <li>✓ Install BootloopSaver immediately if rooting</li>
                <li>✓ Be cautious with system modifications</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Documentation & Resources</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-border hover:border-primary/40 transition">
              <Download className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold mb-2">Firmware Files</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Complete stock ROM and bootloader files for Infinix NOTE 50X 5G
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Download
              </Button>
            </Card>

            <Card className="p-6 border-border hover:border-primary/40 transition">
              <Github className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold mb-2">GitHub Repository</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Source code, tools, and detailed technical documentation
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Visit Repository
              </Button>
            </Card>

            <Card className="p-6 border-border hover:border-primary/40 transition">
              <AlertCircle className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold mb-2">File Documentation</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed explanation of each firmware file and its purpose
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Read Docs
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Credits & Contact Section */}
      <section id="contact" className="py-16 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Credits & Attribution</h3>
              <p className="text-muted-foreground mb-4">
                This project represents significant effort in researching and documenting the bootloader unlock process for Infinix NOTE 50X 5G.
              </p>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Developer:</strong> Abdulaziz Al-Hamdani (عبد العزيز الحمداني)
                </p>
                <p>
                  <strong>License:</strong> MIT License - Free for personal and educational use
                </p>
                <p>
                  <strong>Firmware Source:</strong> androidmtk.com & firmwarefile.com
                </p>
                <p>
                  <strong>Special Thanks:</strong> XDA Developers Community
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/3RBAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span>GitHub: @3RBAI</span>
                </a>
                <a
                  href="https://t.me/a3b6iii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Telegram: @a3b6iii</span>
                </a>
                <a
                  href="mailto:wolfonlyoman@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email: wolfonlyoman@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 Infinix NOTE 50X 5G Bootloader Unlock Guide. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition">
                License
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
