import { useOne } from "@pankod/refine-core";
import { useParams } from "@pankod/refine-react-router-v6";
import { Profile } from "components";

const AgentProfile = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useOne({
      resource: "users",
      id: id as string,
  });
 
  const agentProfile = data?.data ?? [];

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
      <Profile
          type="Agent"
          name={agentProfile.name}
          email={agentProfile.email}
          avatar={agentProfile.avatar}
          properties={agentProfile.allProperties}
      />
  );
};

export default AgentProfile;