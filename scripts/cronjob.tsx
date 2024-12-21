import cron from "node-cron";
import { runTask } from "@/utils/lib/task";



//runs at 2 AM daily
cron.schedule('0 2 * * *', async () => {
    console.log('Executing the cron job...');
    await runTask();
});

console.log('Cron job scheduler is running.');