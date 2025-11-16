'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { Truck } from 'lucide-react';

export default function LoginPage({ onLogin }: { onLogin: (role: 'employee' | 'admin') => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/50 backdrop-blur border-border/50">
        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary/20 p-3 rounded-lg">
              <Truck className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-2">Fleet Manager</h1>
          <p className="text-muted-foreground text-center mb-8 text-sm">
            Centralized Driver & Vehicle Management System
          </p>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-border"
              />
            </div>

            <div className="space-y-2 pt-4">
              <Button 
                onClick={() => onLogin('employee')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Login as Employee
              </Button>
              <Button 
                onClick={() => onLogin('admin')}
                variant="outline"
                className="w-full border-border hover:bg-primary/10"
              >
                Login as Admin
              </Button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Demo credentials accepted for any email/password combination
          </p>
        </div>
      </Card>
    </div>
  );
}
