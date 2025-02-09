import Templates from '@/app/(data)/Templates'; // Ensure this is the correct import
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import Image from 'next/image';
import React from 'react';

// Updated HISTORY interface to allow aiResponse to be null
export interface HISTORY {
    id: number;
    formData: string;
    aiResponse: string | null;  // Fix: Allow null
    templateSlug: string;
}

async function History() {
    // Fetch AI-generated content history from Neon PostgreSQL
    const historyData: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .orderBy(desc(AIOutput.id)) // Sort by latest first
        .execute();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">AI Output History</h1>

            {historyData.length === 0 ? (
                <p className="text-gray-600">No history available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {historyData.map((item) => {
                        // Find the corresponding template from Templates (should be an array of template objects)
                        const template = Templates.find(t => t.slug === item.templateSlug);

                        return (
                            <div key={item.id} className="p-4 border rounded-lg shadow-md bg-white">
                                {template && (
                                    <Image
                                        src={template.icon}
                                        alt={template.name}
                                        width={300}
                                        height={200}
                                        className="rounded-md mb-3"
                                    />
                                )}
                                <h2 className="text-lg font-semibold">{template?.name || "Unknown Template"}</h2>
                                <p className="text-sm text-gray-500">Input: {item.formData}</p>
                                <p className="mt-2 text-gray-800">{item.aiResponse || "No AI Response Available"}</p>
                                <Button className="mt-4">Use Again</Button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default History;
