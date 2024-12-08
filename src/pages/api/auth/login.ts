import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  // Dummy users for testing
  const users = [
    { email: 'student@example.com', password: 'password123', role: 'student' },
    { email: 'resolver@example.com', password: 'password123', role: 'resolver' },
  ];

  // Validate user
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    return res.status(200).json({
      token: 'dummy-jwt-token',
      role: user.role,
    });
  }

  return res.status(401).json({ message: 'Invalid email or password' });
}
