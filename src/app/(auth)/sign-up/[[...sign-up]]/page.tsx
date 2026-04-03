import { SignUp } from "@clerk/nextjs";

export default async function SignUpPage({
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
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl={`/sign-in?role=${role}`}
        forceRedirectUrl="/home"
        fallbackRedirectUrl="/home"
        unsafeMetadata={{ role }}
      />
    </div>
  );
}
