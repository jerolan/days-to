import daysBetweenTwoDates from "../utils/daysBetweenTwoDates";

export interface DateEvent {
  id: string;
  title: string;
  date: Date;
}

export interface EventProps extends DateEvent {}

const Event: React.FunctionComponent<EventProps> = ({ title, date }) => {
  const today = new Date();

  return (
    <div className="flex items-end container rounded mx-auto overflow-hidden shadow p-4 h-64">
      <div className="w-full capitalize">
        <p className="capitalize text-2xl">{title}</p>
        <p className="opacity-75">{`in ${daysBetweenTwoDates(
          today,
          date
        )} days`}</p>
      </div>
    </div>
  );
};

export default Event;
