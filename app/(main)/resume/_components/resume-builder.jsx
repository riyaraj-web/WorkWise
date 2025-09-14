// ./app/(main)/resume/_components/resume-builder.jsx

"use client";

// Fix the import statements - remove duplicate "from"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

// Use dynamic import for MDEditor to avoid SSR issues
import dynamic from 'next/dynamic';
const MDEditor = dynamic(
  () => import('@uiw/react-md-editor'),
  { ssr: false }
);

// Correct html2pdf import
import html2pdf from 'html2pdf.js';

// Import helper functions
import { entriesToMarkdown } from "@/app/lib/helper";

export default function ResumeBuilder() {
  const generatePDF = () => {
    const element = document.getElementById('resume-content');
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resume Builder</h1>
      
      <Tabs defaultValue="personal">
        <TabsList>
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <div className="space-y-4">
            <Textarea placeholder="Enter your personal information..." />
            <Button onClick={generatePDF}>Generate PDF</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="experience">
          <div className="space-y-4">
            <Textarea placeholder="Enter your work experience..." />
          </div>
        </TabsContent>
        
        <TabsContent value="skills">
          <div className="space-y-4">
            <Textarea placeholder="Enter your skills..." />
          </div>
        </TabsContent>
      </Tabs>
      
      <div id="resume-content" className="mt-8 p-6 border">
        {/* Resume preview content */}
        <h2 className="text-xl font-semibold">Resume Preview</h2>
      </div>
    </div>
  );
}