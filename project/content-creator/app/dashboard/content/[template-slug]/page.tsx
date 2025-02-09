"use client";
import React, { useEffect, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";

function CreateNewContent() {
  const params = useParams(); 
  const [selectedTemplate, setSelectedTemplate] = useState<TEMPLATE | undefined>(undefined);
  const [loading,setLoading]=useState(false);
  const [aiOutput,setAiOutput]=useState<string>('')
  const GenerateAIContent= async(formData:any)=>{
      setLoading(true);
      const SelectedPrompt=selectedTemplate?.aiPrompt;
      const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;
      const result = await chatSession.sendMessage(FinalAIPrompt);
      console.log(result.response.text());
      setAiOutput(result?.response.text());
      await SaveInDb(formData,selectedTemplate?.slug,result?.response.text())
      setLoading(false)

  }

  useEffect(() => {
    if (params && params["template-slug"]) {
      const template = Templates.find(
        (item) => item.slug === params["template-slug"]
      );
      setSelectedTemplate(template);
    }
  }, [params]);

  const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
    const result=await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
    });
    console.log(result);
  }
  return (
    <div className="p-10">
      <Link href={'/dashboard'}>
      <Button><ArrowLeft/>Back</Button>
      </Link>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
      {/* FormSection */}
      <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenerateAIContent(v)} loading={loading}/>
      {/* OutputSection */}
      <div className="col-span-2">
      <OutputSection aiOutput={aiOutput} />
      </div>
    </div>
    </div>
  );
}

export default CreateNewContent;
