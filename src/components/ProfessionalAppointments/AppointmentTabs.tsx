import { Tabs } from "flowbite-react";

export default function AppointmentsTabs({ tabDays }: { tabDays: string[] }) {
  const marcacoes = [
    {
      title: "Linha das sobrancelhas",
      name: "Joaquim Freitas",
      phoneNumber: "918256775",
      time: "10:00 - 11:00",
    },
    {
      title: "Corte de cabelo médio",
      name: "Rui Silva",
      phoneNumber: "967062885",
      time: "14:00 - 15:00",
    },
    {
      title: "Barba e cabelo",
      name: "Manuel Santos",
      phoneNumber: "912666230",
      time: "15:00 - 16:00",
    },
    {
      title: "Corte de cabelo curto",
      name: "André Silva",
      phoneNumber: "916410327",
      time: "17:00 - 18:00",
    },
  ];

  return (
    <Tabs aria-label="Default tabs" style="default">
      {tabDays.map((day, index) => (
        <Tabs.Item key={index} title={day}>
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col">
              <span className="text-gray-900 text-2xl border-b-4 mb-6 pb-6">
                Appointments of day {day}
              </span>
              <div className="flex flex-col space-y-4">
                {marcacoes.map((marcacao, idx) => (
                  <div
                    key={idx}
                    className="bg-cyan-700 rounded-lg p-4 md:p-6 flex justify-between items-center"
                  >
                    <span className="text-white text-lg w-[250px] pr-4 md:pr-8 border-r-2 border-white flex-grow text-center h-full items-center">
                      {marcacao.title}
                    </span>
                    <span className="text-white text-lg w-[250px] pr-4 md:pr-8 pl-4 md:pl-8 border-r-2 border-white flex-grow text-center h-full items-center">
                      {marcacao.name}
                    </span>
                    <span className="text-white text-lg w-[200px] pr-4 md:pr-8 pl-4 md:pl-8 border-r-2 border-white flex-grow text-center h-full items-center">
                      {marcacao.phoneNumber}
                    </span>
                    <span className="text-white text-lg w-[100px] pr-4 md:pr-8 pl-4 md:pl-8 border-r-2 border-white flex-grow text-center h-full items-center">
                      {day}
                    </span>
                    <span className="text-white text-lg w-[200px] pl-4 md:pl-8 flex-grow text-center h-full items-center">
                      {marcacao.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 text-2xl border-b-4 mb-6 pb-6">
              Unscheduled hours
              </span>
              <div className="flex flex-col space-y-4">
                <span className="text-gray-900 text-lg">11:00 - 12:00</span>
                <span className="text-gray-900 text-lg">12:00 - 13:00</span>
                <span className="text-gray-900 text-lg">16:00 - 17:00</span>
              </div>
            </div>
          </div>
        </Tabs.Item>
      ))}
    </Tabs>
  );
}