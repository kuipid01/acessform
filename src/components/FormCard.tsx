import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
// import { Badge } from 'lucide-react';
import { Button } from "./ui/button";
import { ImShare } from "react-icons/im";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { Form } from "@prisma/client";

import { formatDistance } from "date-fns";
import { Badge } from "./ui/badge";
import { toast } from "./ui/use-toast";
export default function FormCard({ form }: { form: Form }) {
  const shareLink = `${window.location.origin}/submit/${form.shareURL}`;
  console.log(form);
  return (
    <Card className="  w-full md:w-[calc(33.333%-20px)]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant={"destructive"}>Draft</Badge>}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          {formatDistance(form?.createdAt, new Date(), {
            addSuffix: true,
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button
            className="w-[250px]"
            onClick={() => {
              navigator.clipboard.writeText(shareLink);
              toast({
                title: "Copied!",
                description: "Link copied to clipboard",
              });
            }}
          >
            <ImShare className="mr-2 h-4 w-4" />
            Share link
          </Button>
        )}
        {!form.published && (
          <Button
            asChild
            variant={"secondary"}
            className="w-full mt-2 text-md gap-4"
          >
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
