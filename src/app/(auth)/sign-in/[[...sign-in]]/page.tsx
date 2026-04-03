import { SignIn } from "@clerk/nextjs";

export default async function SignInPage({
  searchParams,
}: {
  searchParams?: Promise<{ role?: string | string[] }>;
}) {
  const resolvedSearchParams = await searchParams;
  const roleParam = Array.isArray(resolvedSearchParams?.role)
    ? resolvedSearchParams?.role[0]
    : resolvedSearchParams?.role;
  const role = roleParam === "interviewer" ? "interviewer" : "candidate";

  return (
    <div className="flex justify-center">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl={`/sign-up?role=${role}`}
        forceRedirectUrl="/home"
        fallbackRedirectUrl="/home"
      />
    </div>
  );
}
