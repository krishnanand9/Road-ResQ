import AssistanceForm from "../components/assistance/AssistanceForm";

const RequestAssistance = () => {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="text-center">
        <p className="font-semibold text-blue-600">
          EMERGENCY ASSISTANCE
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Request Roadside Assistance
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Tell us what happened and share your current location.
          RoadResQ will help you connect with roadside assistance.
        </p>
      </div>

      <div className="mt-10">
        <AssistanceForm />
      </div>
    </div>
  );
};

export default RequestAssistance;