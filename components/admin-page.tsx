'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { LogOut, Plus, Users, Send, AlertCircle } from 'lucide-react';

export default function AdminPage({ 
  onViewDriver,
  onLogout,
}: { 
  onViewDriver: () => void;
  onLogout: () => void;
}) {
  const [newEmail, setNewEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'employee' | 'admin'>('employee');

  const employees = [
    { id: 1, name: 'James Anderson', email: 'james.a@company.com', role: 'Employee', status: 'Active' },
    { id: 2, name: 'Sarah Chen', email: 'sarah.c@company.com', role: 'Employee', status: 'Active' },
    { id: 3, name: 'Michael Rodriguez', email: 'michael.r@company.com', role: 'Employee', status: 'Inactive' },
    { id: 4, name: 'John Smith', email: 'john.s@company.com', role: 'Admin', status: 'Active' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-card/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <Button 
            onClick={onLogout}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/50 border-border/50 p-6">
            <div className="text-muted-foreground text-sm mb-2">Total Drivers</div>
            <div className="text-3xl font-bold">24</div>
          </Card>
          <Card className="bg-card/50 border-border/50 p-6">
            <div className="text-muted-foreground text-sm mb-2">Active Vehicles</div>
            <div className="text-3xl font-bold text-accent">18</div>
          </Card>
          <Card className="bg-card/50 border-border/50 p-6">
            <div className="text-muted-foreground text-sm mb-2">Total Employees</div>
            <div className="text-3xl font-bold">12</div>
          </Card>
          <Card className="bg-card/50 border-border/50 p-6">
            <div className="text-muted-foreground text-sm mb-2">System Users</div>
            <div className="text-3xl font-bold">28</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <Card className="bg-card/50 border-border/50 p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-primary" />
                Add New Employee
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="employee@company.com"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="bg-input border-border/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Role</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={inviteRole === 'employee'}
                        onChange={() => setInviteRole('employee')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Employee</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={inviteRole === 'admin'}
                        onChange={() => setInviteRole('admin')}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Admin</span>
                    </label>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Send Invite
                </Button>
              </div>

              <div className="mt-6 p-3 bg-accent/10 border border-accent/30 rounded-lg">
                <div className="flex gap-2">
                  <AlertCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    Invitation links will be sent via email with login credentials
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-border/50 p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                System Users
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Name</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Email</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Role</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((emp) => (
                      <tr key={emp.id} className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                        <td className="py-3 px-4 text-sm">{emp.name}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{emp.email}</td>
                        <td className="py-3 px-4 text-sm">
                          <span className="px-2 py-1 rounded text-xs bg-primary/20 text-primary">
                            {emp.role}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <span className={`px-2 py-1 rounded text-xs ${
                            emp.status === 'Active'
                              ? 'bg-accent/20 text-accent'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {emp.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <button className="text-xs text-primary hover:underline">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
