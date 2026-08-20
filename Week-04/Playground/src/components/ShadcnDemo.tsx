import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";

export function ShadcnDemo() {
  return (
    <section className="component-card">
      <div className="card-label">SHADCN/UI COMPARISON</div>

      <h2>shadcn/ui Components</h2>

      <p>
        These components are included for comparison with the
        manually-built accessible components.
      </p>

      <div style={{ marginBottom: "20px" }}>
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className="primary-button">
              Open shadcn Dialog
            </button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>shadcn/ui Dialog</DialogTitle>

              <DialogDescription>
                This dialog is provided by shadcn/ui and can be
                compared with the manually implemented modal.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="accessibility">
            Accessibility
          </TabsTrigger>
          <TabsTrigger value="implementation">
            Implementation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          shadcn/ui provides reusable accessible primitives while
          keeping the component source available for inspection.
        </TabsContent>

        <TabsContent value="accessibility">
          The generated components provide established keyboard and
          accessibility behavior.
        </TabsContent>

        <TabsContent value="implementation">
          The source can be read and compared directly with the
          handwritten components.
        </TabsContent>
      </Tabs>
    </section>
  );
}