import { NextResponse } from 'next/server';
import { runTask } from '@/utils/lib/task';

export async function GET() {
    console.log('API route triggered');
    await runTask();
    return NextResponse.json({ success: true, message: 'Task executed successfully.' });
}