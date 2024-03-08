import { getServerSession } from "next-auth";
import { addFriendsValidator } from "../../../../library/validations/add-friends";
import { authoptions } from "../../../../library/auth";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email: emailToAdd } = addFriendsValidator.parse(body.email);
    const RESTResponse = await fetch(
      `${process.env.UPSTASH_REDIS_REST_URL}/get/user:email${emailToAdd}`,
      {
        headers: {
          Authorization: `Bearer:${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        },
        cache: "no-store",
      }
    );
    const data = (await RESTResponse.json()) as { result: string | null };
    const idToAdd = data.result;
    const session = await getServerSession(authoptions);
    if (!idToAdd) {
      return new Response("This person does not exist.", { status: 400 });
    }
    if (!session) {
      return new Response("UnAuthorized", { status: 401 });
    }
    if(idToAdd === session.user.id){
        return new Response("You can not add yourself as a friend",{status:400})
    }
  } catch (error) {}
}
