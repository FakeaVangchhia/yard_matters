
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: "1",
    text: "👋 Hi there! How can I help you today with YardMatters?",
    sender: "bot",
    timestamp: new Date(),
  },
];

const botResponses: Record<string, string[]> = {
  default: [
    "I'd be happy to help you with that. Could you provide more details?",
    "Let me connect you with our team who can help with this specific question.",
    "That's a great question! YardMatters specializes in secure property collaboration.",
  ],
  greeting: [
    "Hello! How can I help you with YardMatters today?",
    "Hi there! Looking for information about land development collaborations?",
    "Welcome to YardMatters! How can I assist you with your property needs?",
  ],
  landowner: [
    "As a landowner, you can list your property securely without revealing your contact details. We verify all developers before they can view your listing.",
    "YardMatters helps landowners connect with verified developers while keeping your information private until you approve a collaboration.",
    "Our platform allows you to list your land with just general location and basic details. Your personal information remains private.",
  ],
  developer: [
    "Developers can browse verified land listings and submit proposals through our secure platform.",
    "We verify all property listings to ensure they're legitimate before developers can submit proposals.",
    "As a developer, you can filter properties by location, size, and development type to find the perfect match for your investment.",
  ],
  privacy: [
    "Your privacy is our priority. We never share contact details between parties without explicit permission.",
    "All communications happen through our platform until both parties agree to connect directly.",
    "Your documents and personal information are encrypted and securely stored following ISO 27001 standards.",
  ],
  process: [
    "Our process is simple: list your property, receive proposals from verified developers, and collaborate securely through our platform.",
    "YardMatters mediates all communications and helps structure fair agreements between landowners and developers.",
    "Once both parties agree to collaborate, we help generate appropriate documentation and track progress.",
  ],
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage = generateBotResponse(input);
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase();
    let responseCategory = "default";
    
    if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("hey")) {
      responseCategory = "greeting";
    } else if (lowerInput.includes("landowner") || lowerInput.includes("land owner") || lowerInput.includes("my land") || lowerInput.includes("my property")) {
      responseCategory = "landowner";
    } else if (lowerInput.includes("developer") || lowerInput.includes("invest") || lowerInput.includes("build")) {
      responseCategory = "developer";
    } else if (lowerInput.includes("privacy") || lowerInput.includes("secure") || lowerInput.includes("safe") || lowerInput.includes("protect")) {
      responseCategory = "privacy";
    } else if (lowerInput.includes("how") || lowerInput.includes("process") || lowerInput.includes("work")) {
      responseCategory = "process";
    }

    const responses = botResponses[responseCategory];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    return {
      id: Date.now().toString(),
      text: randomResponse,
      sender: "bot",
      timestamp: new Date(),
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const quickQuestions = [
    "How does YardMatters protect my privacy?",
    "I'm a landowner looking to collaborate",
    "How do you verify developers?",
    "What is the collaboration process?"
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 sm:right-8 w-[350px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[80vh] bg-background border rounded-xl shadow-xl flex flex-col overflow-hidden z-50"
          >
            <div className="flex items-center justify-between bg-[#14532d] text-white p-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 bg-primary">
                  <span className="text-xs font-semibold">YM</span>
                </Avatar>
                <div>
                  <h3 className="font-medium text-sm">YardMatters Assistant</h3>
                  <p className="text-xs opacity-80">We typically reply in a few minutes</p>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-white hover:bg-white/10"
                onClick={toggleChat}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.sender === "user" 
                        ? "bg-brand-600 text-white rounded-tr-none" 
                        : "bg-muted text-foreground rounded-tl-none"
                    }`}
                  >
                    {message.text}
                  </motion.div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-xl bg-muted text-foreground rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, i) => (
                    <button
                      key={i}
                      className="text-xs py-1.5 px-3 bg-secondary/50 hover:bg-secondary rounded-full flex items-center gap-1 transition-colors"
                      onClick={() => {
                        setInput(question);
                        handleSend();
                      }}
                    >
                      {question}
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="p-3 border-t">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button 
                  size="icon" 
                  onClick={handleSend}
                  disabled={input.trim() === ""}
                  className="bg-[#14532d] hover:bg-[#14532d]/90 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={toggleChat}
        className="fixed bottom-4 right-4 sm:right-8 bg-[#14532d] text-white p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </>
  );
};

export default Chatbot;
