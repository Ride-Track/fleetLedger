'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { ArrowLeft, LogOut, Truck, AlertCircle } from 'lucide-react';

const DRIVER_DETAILS = {
  id: 1,
  name: 'James Anderson',
  employeeId: 'EMP001',
  carNumber: 'CAR-2024-001',
  carModel: 'Toyota Hiace',
  carType: 'Commercial Van',
  status: 'Active',
  location: 'Route A - Downtown',
  employmentDate: '2022-03-15',
  dischargeDate: null,
  activeHours: '08:00 - 17:00 Mon-Fri',
  photo: '/professional-driver-portrait.png',
  carImages: [
    '/van-exterior-front.jpg',
    '/van-interior-cargo.jpg',
  ],
  vehicleHistory: [
    { date: '2023-10-15', event: 'Maintenance - Oil Change', status: 'Completed' },
    { date: '2023-09-20', event: 'Safety Inspection', status: 'Passed' },
    { date: '2023-08-10', event: 'Annual Service', status: 'Completed' },
  ],
};

export default function DriverDetailPage({ 
  onBack,
  onLogout,
}: { 
  onBack: () => void;
  onLogout: () => void;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-card/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
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

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Card className="bg-card/50 border-border/50 p-6">
              <div className="text-center mb-6">
                <img
                  src={DRIVER_DETAILS.photo || "/placeholder.svg"}
                  alt={DRIVER_DETAILS.name}
                  className="w-32 h-32 rounded-lg mx-auto mb-4 object-cover"
                />
                <h1 className="text-2xl font-bold mb-1">{DRIVER_DETAILS.name}</h1>
                <p className="text-muted-foreground">{DRIVER_DETAILS.employeeId}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Employment Date</div>
                  <div className="font-medium">March 15, 2022</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Status</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-medium text-accent">{DRIVER_DETAILS.status}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Active Hours</div>
                  <div className="font-medium text-sm">{DRIVER_DETAILS.activeHours}</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="md:col-span-2">
            {/* Vehicle Info */}
            <Card className="bg-card/50 border-border/50 p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                Vehicle Information
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Car Number</div>
                  <div className="font-semibold text-lg">{DRIVER_DETAILS.carNumber}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Car Model</div>
                  <div className="font-semibold">{DRIVER_DETAILS.carModel}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Vehicle Type</div>
                  <div className="font-semibold">{DRIVER_DETAILS.carType}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Current Location</div>
                  <div className="font-semibold">{DRIVER_DETAILS.location}</div>
                </div>
              </div>
            </Card>

            {/* Vehicle Images */}
            <Card className="bg-card/50 border-border/50 p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Vehicle Images</h3>
              <div className="grid grid-cols-2 gap-4">
                {DRIVER_DETAILS.carImages.map((image, idx) => (
                  <img
                    key={idx}
                    src={image || "/placeholder.svg"}
                    alt={`Vehicle ${idx + 1}`}
                    className="w-full h-40 rounded-lg object-cover border border-border/50"
                  />
                ))}
              </div>
            </Card>

            {/* History */}
            <Card className="bg-card/50 border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4">Vehicle History</h3>
              <div className="space-y-3">
                {DRIVER_DETAILS.vehicleHistory.map((record, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0">
                    <div className="flex-1">
                      <div className="font-medium">{record.event}</div>
                      <div className="text-sm text-muted-foreground">{record.date}</div>
                    </div>
                    <div className="px-2 py-1 rounded text-xs font-medium bg-accent/20 text-accent">
                      {record.status}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
