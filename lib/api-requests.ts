interface SaveEmailResponse {
  message: string;
}

const apiServerBaseUrl = process.env.NEXT_PUBLIC_API_SERVER_BASE_URL || "";

export const saveEmail = async (email: string): Promise<SaveEmailResponse> => {
  const response = await fetch(`${apiServerBaseUrl}/api/waitlist/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) {
    throw new Error("Failed to save email");
  }
  return await response.json();
};
