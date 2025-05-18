export const formatCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export const formatBRDate = (date: Date | string) => {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("pt-BR");
};

export const getDocumentType = (documentType: string): string => {
  switch (documentType) {
    case "nota_fiscal":
      return "Nota Fiscal";
    case "recibo":
      return "Recibo ou Outros";
    case "documento_emitido_no_exterior":
      return "Documento Emitido no Exterior";
    case "despesa_do_parlasul":
      return "Despesa do Parlasul";
    case "nota_fiscal_eletronica":
      return "Nota Fiscal Eletrônica";
    default:
      return "Desconhecido";
  }
};
