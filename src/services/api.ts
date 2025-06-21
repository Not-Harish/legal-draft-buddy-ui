interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatResponse {
  message: string;
  timestamp: string;
}

interface DocumentResponse {
  content: string;
}

const BASE_URL = "http://localhost:5000/api"; // change to your deployment URL if hosted

export const chatAPI = {
  sendMessage: async (
    message: string,
    conversationHistory: ChatMessage[]
  ): Promise<ChatResponse[]> => {
    const response = await fetch('http://localhost:5000/api/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history: conversationHistory }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const data = await response.json();
    return data as ChatResponse[]; // ✅ now typed as an array
  }
};

export const documentAPI = {
  generateDocument: async (instruction: string, content?: string): Promise<DocumentResponse> => {
    const response = await fetch(`${BASE_URL}/generate-document`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ instruction, content }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate document');
    }

    const data = await response.json();
    return data as DocumentResponse;
  },
};
