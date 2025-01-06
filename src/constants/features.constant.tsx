import {
  Video,
  CheckCircle,
  Star,
  Clock,
  Shield,
  MessageSquare,
} from "lucide-react";

export const FEATURES = [
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: "Verified Experts",
    description:
      "All our experts go through a rigorous verification process to ensure top quality guidance",
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: "Flexible Scheduling",
    description:
      "Book sessions at your convenience with our easy-to-use scheduling system",
  },
  {
    icon: <Video className="w-12 h-12 text-blue-600" />,
    title: "HD Video Calls",
    description:
      "Crystal clear video calls powered by Google Meet for seamless communication",
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
    title: "Direct Messaging",
    description: "Stay in touch with your expert before and after sessions",
  },
  {
    icon: <Star className="w-12 h-12 text-blue-600" />,
    title: "Quality Assured",
    description: "Rate and review sessions to maintain high standards",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
    title: "Money Back Guarantee",
    description: "Not satisfied with your session? Get a full refund",
  },
];
