"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as Form from "@radix-ui/react-form";
import { Button } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Input from "@/app/_components/Input";

// Validation schema
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// Infer form data type from schema
type FormData = z.infer<typeof schema>;

const Signin: React.FC = () => {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      } else {
        const result = await response.json();
        console.log("Token:", result.token);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Form.Root onSubmit={handleSubmit(onSubmit)} className="w-[300px]">
        <Form.Field name="email" className="mb-4">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control asChild>
            <Input id="email" type="email" {...register("email")} />
          </Form.Control>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </Form.Field>
        <Form.Field name="password" className="mb-4">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control asChild>
            <Input id="password" type="password" {...register("password")} />
          </Form.Control>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </Form.Field>

        <div className="flex justify-center mt-4">
          <Form.Submit asChild>
            <Button size="3" type="submit" className="w-full p-2">
              {t("Common.signin")}
            </Button>
          </Form.Submit>
        </div>
      </Form.Root>
    </div>
  );
};

export default Signin;
