import { env } from "@/next.config"

const appName = process.env.NEXT_PUBLIC_APP_NAME;
const appVersion =  process.env.NEXT_PUBLIC_APP_VERSION

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    <div>
      This is the sample app to check how  key vault works in azure
    </div>

    <div>
      the following are the env variables 

      <div>
        This is the name 
        <h1 className="text-[80px]">
        {appName}
        </h1>
         and version is <h2 className="text-[60px]">
         {appVersion}
         </h2>
      </div>
    </div>
    </main>
  )
}
