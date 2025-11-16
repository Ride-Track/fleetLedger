'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { LogOut, Search, MapPin, Truck } from 'lucide-react';

const DRIVERS_DATA = [
  {
    id: 1,
    name: 'James Anderson',
    employeeId: 'EMP001',
    carNumber: 'CAR-2024-001',
    carModel: 'Toyota Hiace',
    carType: 'Commercial Van',
    status: 'Active',
    location: 'Route A - Downtown',
    employmentDate: '2022-03-15',
    photo: '/professional-driver-portrait.png',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    employeeId: 'EMP002',
    carNumber: 'CAR-2024-002',
    carModel: 'Ford Transit',
    carType: 'Delivery Van',
    status: 'Active',
    location: 'Route B - Suburbs',
    employmentDate: '2021-07-22',
    photo: '/female-driver.png',
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    employeeId: 'EMP003',
    carNumber: 'CAR-2024-003',
    carModel: 'Mercedes Sprinter',
    carType: 'Freight Van',
    status: 'Inactive',
    location: 'Maintenance',
    employmentDate: '2020-11-08',
    photo: '/man-driver-portrait.jpg',
  },
  {
    id: 4,
    name: 'Emily Watson',
    employeeId: 'EMP004',
    carNumber: 'CAR-2024-004',
    carModel: 'Renault Master',
    carType: 'Commercial Van',
    status: 'Active',
    location: 'Route C - Industrial',
    employmentDate: '2023-01-10',
    photo: '/woman-professional-driver.jpg',
  },
];

export default function DashboardPage({ 
  onViewDriver,
  onLogout,
}: { 
  onViewDriver: () => void;
  onLogout: () => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDriver, setSelectedDriver] = useState(DRIVERS_DATA[0]);

  const filteredDrivers = DRIVERS_DATA.filter(
    (driver) =>
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.carNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeCount = DRIVERS_DATA.filter((d) => d.status === 'Active').length;
  const inactiveCount = DRIVERS_DATA.filter((d) => d.status === 'Inactive').length;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-card/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold">Fleet Manager</h1>
          </div>
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

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-card/50 border-border/50 p-6">
            <div className="text-muted-foreground text-sm mb-2">Total Drivers</div>
            <div className="text-3xl font-bold">{DRIVERS_DATA.length}</div>
          </Card>
          <Card className="bg-card/50 border-border/50 p-6">
            <div className="text-muted-foreground text-sm mb-2">Active Vehicles</div>
            <div className="text-3xl font-bold text-accent">{activeCount}</div>
          </Card>
          <Card className="bg-card/50 border-border/50 p-6">
            <div className="text-muted-foreground text-sm mb-2">Inactive Vehicles</div>
            <div className="text-3xl font-bold text-destructive">{inactiveCount}</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-border/50">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Drivers & Vehicles</h2>
                
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, car number, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-input border-border/50"
                  />
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredDrivers.map((driver) => (
                    <button
                      key={driver.id}
                      onClick={() => {
                        setSelectedDriver(driver);
                        onViewDriver();
                      }}
                      className={`w-full p-4 rounded-lg border transition-all text-left ${
                        selectedDriver.id === driver.id
                          ? 'bg-primary/10 border-primary/50'
                          : 'bg-background/50 border-border/50 hover:border-primary/30'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={driver.photo || "/placeholder.svg"}
                          alt={driver.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="font-semibold">{driver.name}</div>
                          <div className="text-sm text-muted-foreground">{driver.carNumber}</div>
                          <div className="flex items-center gap-2 mt-2">
                            <MapPin className="w-3 h-3 text-accent" />
                            <span className="text-xs text-muted-foreground">{driver.location}</span>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          driver.status === 'Active'
                            ? 'bg-accent/20 text-accent'
                            : 'bg-destructive/20 text-destructive'
                        }`}>
                          {driver.status}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="bg-card/50 border-border/50">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Driver Profile</h3>
                
                <div className="text-center mb-6">
                  <img
                    src={selectedDriver.photo || "/placeholder.svg"}
                    alt={selectedDriver.name}
                    className="w-20 h-20 rounded-lg mx-auto mb-4 object-cover"
                  />
                  <div className="font-semibold">{selectedDriver.name}</div>
                  <div className="text-sm text-muted-foreground">{selectedDriver.employeeId}</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1">Vehicle</div>
                    <div className="font-medium">{selectedDriver.carModel}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Car Number</div>
                    <div className="font-medium">{selectedDriver.carNumber}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Type</div>
                    <div className="font-medium">{selectedDriver.carType}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Status</div>
                    <div className={`font-medium ${
                      selectedDriver.status === 'Active' ? 'text-accent' : 'text-destructive'
                    }`}>
                      {selectedDriver.status}
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={onViewDriver}
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                >
                  View Full Details
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
