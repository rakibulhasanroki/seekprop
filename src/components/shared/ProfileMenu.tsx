import { Avatar, AvatarFallback } from "../ui/avatar";

function ProfileMenu() {
  return (
    <div>
      <Avatar className="w-10  h-10 cursor-pointer">
        <AvatarFallback className="bg-muted text-muted-foreground">
          S
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default ProfileMenu;
