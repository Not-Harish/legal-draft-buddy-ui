
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
  sections: string[];
}

export const chatAPI = {
  sendMessage: async (message: string, conversationHistory: ChatMessage[]): Promise<ChatResponse> => {
    // Simulate API call - replace with your actual endpoint
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history: conversationHistory
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    const data = await response.json();
    return data;
  }
};

export const documentAPI = {
  generateDocument: async (prompt: string, currentContent?: string): Promise<DocumentResponse> => {
    // Simulate API call - replace with your actual endpoint
    const response = await fetch('/api/document', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        currentContent
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate document');
    }

    const data = await response.json();
    return data;
  }
};
