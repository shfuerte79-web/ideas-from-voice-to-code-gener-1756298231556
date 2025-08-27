import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Vocal Syntax Engine",
    "one_liner": "Transform practical spoken ideas into operational code snippets instantly.",
    "why_now": "With the growing use of voice assistants, programmers want hands-free options for coding.",
    "novel_mechanism": "Combining natural language understanding with context-aware programming assistance.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Speech",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Voice-controlled programming for visually impaired developers",
      "Team coding sessions using voice commands for faster collaboration"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice command interpretation",
        "Code suggestion display",
        "Basic integration with IDEs"
      ],
      "tools": [
        "React",
        "Firebase",
        "Voiceflow"
      ],
      "data_bootstrap": [
        "public coding documentation",
        "programming examples from GitHub"
      ],
      "risk": [
        "accuracy of voice recognition",
        "rejection from developer community"
      ],
      "mitigation": [
        "continuous feedback loop for improvement",
        "targeted marketing towards early adopters"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Demoing how voice coding saves time",
        "Showcase of creating complex scripts with simple commands"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Discord"
      ],
      "pricing": {
        "free": "Limited commands per day",
        "pro": "$10/month for unlimited usage",
        "business": "$50/month for team collaboration features"
      }
    },
    "moat": [
      "user-generated command library",
      "partnerships with coding bootcamps",
      "investment in language support"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 6,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 27,
    "reasoning": "It enables an entirely new way of coding that appeals to a broader audience, particularly those who struggle with traditional coding."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}