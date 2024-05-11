import { Tabs } from "flowbite-react";

export default function AppointmentsTabs({ tabDays }: { tabDays: string[] }) {
  interface Appointment {
    title: string;
    name: string;
    phoneNumber: string;
    time: string;
  }

  const DayAppointments: Appointment[][] = [
    [
      {
        title: "Extensions",
        name: "Joana Silva",
        phoneNumber: "912345678",
        time: "09:00 - 10:00",
      },
      {
        title: "Full Beard",
        name: "Joaquim Freitas",
        phoneNumber: "918256775",
        time: "10:00 - 11:00",
      },
      {
        title: "Eyelash Extensions",
        name: "Ana Santos",
        phoneNumber: "967062885",
        time: "14:00 - 15:00",
      },
      {
        title: "Haircut",
        name: "João Mário",
        phoneNumber: "966712322",
        time: "15:00 - 16:00",
      },
      {
        title: "Haircut",
        name: "André Henriques",
        phoneNumber: "966712322",
        time: "17:00 - 18:00",
      },
    ],
    [
      {
        title: "Straightening",
        name: "Rita Pereira",
        phoneNumber: "966712345",
        time: "09:00 - 10:00",
      },
      {
        title: "Eyebrow Design",
        name: "Manuel Santos",
        phoneNumber: "912666230",
        time: "15:00 - 16:00",
      },
      {
        title: "Skin Cleaning",
        name: "Henrique Ferreira",
        phoneNumber: "916410327",
        time: "17:00 - 18:00",
      },
    ],
    [
      {
        title: "Fade Beard",
        name: "Miguel Lopes",
        phoneNumber: "918256775",
        time: "10:00 - 11:00",
      },
      {
        title: "Facial Treatment",
        name: "Raquel Dias",
        phoneNumber: "967062885",
        time: "14:00 - 15:00",
      },
      {
        title: "Acne Treatment",
        name: "Carolina Teixeira",
        phoneNumber: "966712322",
        time: "15:00 - 16:00",
      },
      {
        title: "Haircut",
        name: "André Costa",
        phoneNumber: "966712322",
        time: "17:00 - 18:00",
      },
    ],
    [
      {
        title: "Haircut",
        name: "Marta Silva",
        phoneNumber: "966712898",
        time: "10:00 - 11:00",
      },
      {
        title: "Haircut",
        name: "André Henriques",
        phoneNumber: "966712322",
        time: "15:00 - 16:00",
      },
    ],
  ];

  const Slots: string[] = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const AppointmentSlot = ({
    slot,
    appointment,
  }: {
    slot: string;
    appointment: any;
  }) => (
    <div
      className="flex justify-between items-center px-4 py-2 border-b"
      style={{ minHeight: "90px" }}
    >
      <div>
        {appointment ? (
          <>
            <span className="font-semibold">{appointment.title}</span>
            <span className="block font-semibold">{appointment.name}</span>
            <span className="block font-semibold">
              {appointment.phoneNumber}
            </span>
          </>
        ) : (
          <span>---------------------------------</span>
        )}
      </div>
      <span className="font-semibold">{slot}</span>
    </div>
  );

  return (
    <>
      <div className="p-8">
        <Tabs aria-label="Default tabs" style="default">
          {tabDays.map((day, index) => (
            <Tabs.Item key={index} title={day}>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Appointments of day {day}
                </h3>
                {Slots.map((slot, slotIndex) => {
                  const appointment = DayAppointments[index]?.find((m) =>
                    m.time.startsWith(slot)
                  );
                  return (
                    <AppointmentSlot
                      key={slotIndex}
                      slot={slot}
                      appointment={appointment}
                    />
                  );
                })}
              </div>
            </Tabs.Item>
          ))}
        </Tabs>
      </div>
    </>
  );
}
