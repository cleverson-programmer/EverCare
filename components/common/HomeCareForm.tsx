"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Notification } from "@/components/common/Notification";
import { useNotification } from "@/hooks/useNotification";
import { Loader2 } from "lucide-react";

interface HomeCareFormProps {
  serviceType: string;
}

const assistanceTypes: Record<string, string[]> = {
  "Cuidados Básicos": ["Higiene pessoal", "Alimentação", "Locomoção", "Medicação"],
  "Procedimentos": ["Curativos", "Medicação IV", "Monitoramento", "Fisioterapia"],
  "Suporte": ["Psicológico", "Espiritual", "Nutricional", "Fonoaudiologia"],
};

const HomeCareForm = ({ serviceType }: HomeCareFormProps) => {

  const [loading, setLoading] = useState(false);
  const { notification, showNotification, hideNotification } = useNotification();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    patientAge: "",
    numberOfPeople: "1",
    selectedAssistance: [] as string[],
    frequency: "pontual",
    observations: "",
  });

  const toggleAssistance = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedAssistance: prev.selectedAssistance.includes(item)
        ? prev.selectedAssistance.filter((a) => a !== item)
        : [...prev.selectedAssistance, item],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        showNotification("Solicitação enviada com sucesso!", "success");
      } else {
        showNotification("Erro ao enviar. Tente novamente.", "error");
      }
    } catch (error) {
      showNotification("Erro inesperado. Tente novamente.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
  <>
    <form onSubmit={handleSubmit} className="space-y-4">
      <h4 className="font-semibold text-foreground text-sm">Dados do Responsável</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Label htmlFor="hc-name" className="text-xs text-muted-foreground">Nome completo</Label>
          <Input id="hc-name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Seu nome" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="hc-phone" className="text-xs text-muted-foreground">Telefone</Label>
          <Input id="hc-phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(00) 00000-0000" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="hc-email" className="text-xs text-muted-foreground">E-mail</Label>
          <Input id="hc-email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@exemplo.com" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="hc-address" className="text-xs text-muted-foreground">Endereço</Label>
          <Input id="hc-address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} placeholder="Rua, número, bairro" className="mt-1" />
        </div>
      </div>

      <h4 className="font-semibold text-foreground text-sm pt-2">Dados do Paciente</h4>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <Label htmlFor="hc-age" className="text-xs text-muted-foreground">Idade do paciente</Label>
          <Input id="hc-age" type="number" min="0" value={formData.patientAge} onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })} placeholder="Ex: 72" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="hc-people" className="text-xs text-muted-foreground">Qtd. de pessoas</Label>
          <Input id="hc-people" type="number" min="1" value={formData.numberOfPeople} onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="hc-freq" className="text-xs text-muted-foreground">Frequência</Label>
          <select
            id="hc-freq"
            value={formData.frequency}
            onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="pontual">Pontual</option>
            <option value="semanal">Semanal</option>
            <option value="quinzenal">Quinzenal</option>
            <option value="mensal">Mensal</option>
            <option value="diario">Diário</option>
          </select>
        </div>
      </div>

      <h4 className="font-semibold text-foreground text-sm pt-2">Tipo de Auxílio Necessário</h4>

      <div className="space-y-3">
        {Object.entries(assistanceTypes).map(([category, items]) => (
          <div key={category}>
            <p className="text-xs font-medium text-muted-foreground mb-1.5">{category}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <label
                  key={item}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border cursor-pointer transition-colors ${
                    formData.selectedAssistance.includes(item)
                      ? "bg-homecare-light border-homecare text-homecare"
                      : "bg-muted border-border text-muted-foreground hover:border-homecare/40"
                  }`}
                >
                  <Checkbox
                    checked={formData.selectedAssistance.includes(item)}
                    onCheckedChange={() => toggleAssistance(item)}
                    className="hidden"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <Label htmlFor="hc-obs" className="text-xs text-muted-foreground">Observações</Label>
        <Textarea id="hc-obs" value={formData.observations} onChange={(e) => setFormData({ ...formData, observations: e.target.value })} placeholder="Condições médicas, necessidades especiais..." className="mt-1" rows={3} />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 cursor-pointer bg-primary text-white rounded-lg font-semibold text-sm 
        hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {loading && <Loader2 size={16} className="animate-spin" />}
        {loading ? "Enviando..." : "Enviar Solicitação"}
      </button>
    </form>
    <Notification
      message={notification.message}
      type={notification.type}
      isVisible={notification.isVisible}
      onClose={hideNotification}
    />
  </>
  );
};

export default HomeCareForm;
