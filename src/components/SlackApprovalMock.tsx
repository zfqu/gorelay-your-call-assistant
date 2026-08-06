import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SlackApprovalMock() {
  const [state, setState] = useState<"idle" | "approved" | "rejected">("idle");

  return (
    <div className="max-w-2xl mx-auto card-elevated overflow-hidden text-left">
      <div className="px-5 py-3 border-b border-border bg-secondary/50">
        <p className="text-sm font-semibold text-foreground">
          🟢 Lead Approval Required | Relay GTM Engine
        </p>
      </div>

      <div className="p-5 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Contact</p>
            <p className="text-sm font-medium text-foreground">Jane Doe | VP of Engineering</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Company</p>
            <p className="text-sm font-medium text-foreground">
              Acme Cloud Systems (SaaS, 50-200 employees)
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Fit Reasoning</p>
          <p className="text-sm text-muted-foreground">
            "Matches target ICP: Recently expanded tech stack, uses Postgres, actively hiring dev team."
          </p>
        </div>

        <div className="rounded-lg border border-border bg-muted/50 p-4 space-y-3">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Generated Email Copy</p>
          <p className="text-sm text-foreground">
            <span className="font-semibold">Email 1:</span> "Hi Jane, noticed Acme's recent expansion into..."
          </p>
          <p className="text-sm text-foreground">
            <span className="font-semibold">Email 2:</span> "Quick follow up regarding your GTM infrastructure..."
          </p>
        </div>

        {state === "idle" ? (
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button onClick={() => setState("approved")}>🟢 Approve &amp; Dispatch</Button>
            <Button variant="outline" onClick={() => setState("rejected")}>
              🔴 Reject
            </Button>
          </div>
        ) : (
          <div className="pt-1">
            <div
              className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                state === "approved"
                  ? "bg-primary/10 text-primary"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {state === "approved" ? "Dispatched to Sequencer ✓" : "Lead Rejected"}
            </div>
            <button
              className="mt-3 text-xs text-muted-foreground underline"
              onClick={() => setState("idle")}
            >
              Reset demo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
