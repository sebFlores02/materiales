export type Product = {
  categoria: string;
  material: string;
  unidad: string;
  marca?: string;
  precioPorTonelada?: number;
  precioPorBulto?: number;
  precioPorPieza?: number;
  precioPorCaja?: number;
  precioPorKg?: number;
  precioPorRollo?: number;
  precioPorBolsa?: number;
};

function inferMarca(material: string): string | undefined {
  const marcas = [
    "HOLCIM", "TOLTECA", "FORTALEZA", "TRIMOSA", "CALIDRA", "UNIBLOCK", "CEMIX", "ADEBLOCK", "DUROMAX", "SUPREMO DE MORELOS", "BUNKER", "ARMEX", "FISCHER", "AQUAROC", "PLAKA", "X-TERIUM", "RH", "RF", "MAX", "METAL-METAL", "YESO-METAL", "FIBAPANTE", "PE4103", "PE935", "CL635", "CC1", "CE410", "CE410", "CEMEX", "TRUPER", "DEACERO", "TERNIUM", "VITROMEX", "INTERCERAMIC"
  ];
  const upper = material.toUpperCase();
  return marcas.find(m => upper.includes(m));
}

export const products: Product[] = [
  // POLVOS
  { categoria: "Polvos", material: "CEMENTO GRIS HOLCIM 50KG", unidad: "TON", marca: inferMarca("CEMENTO GRIS HOLCIM 50KG"), precioPorTonelada: 4505.00, precioPorBulto: 225.00 },
  { categoria: "Polvos", material: "CEMENTO TOLTECA 25KG", unidad: "TON", marca: inferMarca("CEMENTO TOLTECA 25KG"), precioPorTonelada: 5088.00, precioPorBulto: 127.20 },
  { categoria: "Polvos", material: "CEMENTO GRIS FORTALEZA 25KG", unidad: "TON", marca: inferMarca("CEMENTO GRIS FORTALEZA 25KG"), precioPorTonelada: 4305.64, precioPorBulto: 107.64 },
  { categoria: "Polvos", material: "CEMENTO GRIS TRIMOSA 50KG", unidad: "TON", marca: inferMarca("CEMENTO GRIS TRIMOSA 50KG"), precioPorTonelada: 3811.76, precioPorBulto: 190.59 },
  { categoria: "Polvos", material: "MORTERO GRIS HOLCIM 50KG", unidad: "TON", marca: inferMarca("MORTERO GRIS HOLCIM 50KG"), precioPorTonelada: 3911.39, precioPorBulto: 195.57 },
  { categoria: "Polvos", material: "MORTERO GRIS TOLTECA 25KG", unidad: "TON", marca: inferMarca("MORTERO GRIS TOLTECA 25KG"), precioPorTonelada: 4452.00, precioPorBulto: 111.30 },
  { categoria: "Polvos", material: "MORTERO GRIS FORTALEZA 25KG", unidad: "TON", marca: inferMarca("MORTERO GRIS FORTALEZA 25KG"), precioPorTonelada: 3848.00, precioPorBulto: 96.20 },
  { categoria: "Polvos", material: "MORTERO GRIS TRIMONSA 50KG", unidad: "TON", marca: inferMarca("MORTERO GRIS TRIMONSA 50KG"), precioPorTonelada: 2967.02, precioPorBulto: 148.35 },
  { categoria: "Polvos", material: "CAL CALIDRA 25KG", unidad: "TON", marca: inferMarca("CAL CALIDRA 25KG"), precioPorTonelada: 3434.40, precioPorBulto: 85.86 },
  { categoria: "Polvos", material: "ESTUCO UNIBLOCK 40KG", unidad: "TON", marca: inferMarca("ESTUCO UNIBLOCK 40KG"), precioPorTonelada: 3922.01, precioPorBulto: 156.88 },
  { categoria: "Polvos", material: "ESTUCO ADEBLOCK PLUS AP CEMIX 25 KG (BOLSA ROJA)", unidad: "TON", marca: inferMarca("ESTUCO ADEBLOCK PLUS AP CEMIX 25 KG (BOLSA ROJA)"), precioPorTonelada: 4789.41, precioPorBulto: 119.74 },
  { categoria: "Polvos", material: "ESTUCO ADEBLOCK EM BLANCO CEMIX 25 KG (BOLSA NARANJA)", unidad: "TON", marca: inferMarca("ESTUCO ADEBLOCK EM BLANCO CEMIX 25 KG (BOLSA NARANJA)"), precioPorTonelada: 4391.30, precioPorBulto: 109.78 },
  { categoria: "Polvos", material: "YESO MÁXIMO 40KG", unidad: "TON", marca: inferMarca("YESO MÁXIMO 40KG"), precioPorTonelada: 2862.20, precioPorBulto: 114.48 },
  { categoria: "Polvos", material: "YESO SUPERIOR 40KG", unidad: "TON", marca: inferMarca("YESO SUPERIOR 40KG"), precioPorTonelada: 3549.71, precioPorBulto: 141.99 },
  { categoria: "Polvos", material: "YESO DUROMAX 40KG", unidad: "TON", marca: inferMarca("YESO DUROMAX 40KG"), precioPorTonelada: 3074.00, precioPorBulto: 122.96 },
  { categoria: "Polvos", material: "YESO AMARRADO SUPREMO DE MORELOS 34.5 KG", unidad: "TON", marca: inferMarca("YESO AMARRADO SUPREMO DE MORELOS 34.5 KG"), precioPorTonelada: 2551.42, precioPorBulto: 102.06 },
  { categoria: "Polvos", material: "APLANADO UNIBLOCK 40KG", unidad: "TON", marca: inferMarca("APLANADO UNIBLOCK 40KG"), precioPorTonelada: 5194.00, precioPorBulto: 207.76 },
  { categoria: "Polvos", material: "PEGAPISO UNIBLOCK GRIS 20KG", unidad: "TON", marca: inferMarca("PEGAPISO UNIBLOCK GRIS 20KG"), precioPorTonelada: 3816.00, precioPorBulto: 76.32 },
  { categoria: "Polvos", material: "PEGAPISO GRIS CEMIX 20KG", unidad: "TON", marca: inferMarca("PEGAPISO GRIS CEMIX 20KG"), precioPorTonelada: 4089.09, precioPorBulto: 81.78 },

  // ACERO
  { categoria: "Acero", material: "CLAVO STD 2 1/2\"", unidad: "KG", marca: inferMarca("CLAVO STD 2 1/2\""), precioPorKg: 25.72, precioPorBulto: 643.10 },
  { categoria: "Acero", material: "CLAVO STD 4\"", unidad: "KG", marca: inferMarca("CLAVO STD 4\""), precioPorKg: 25.72, precioPorBulto: 643.10 },
  { categoria: "Acero", material: "CLAVO CONCRETO 4\"", unidad: "KG", marca: inferMarca("CLAVO CONCRETO 4\""), precioPorKg: 56.70, precioPorBulto: 1417.45 },
  { categoria: "Acero", material: "CLAVO CONCRETO 2 1/2\"", unidad: "KG", marca: inferMarca("CLAVO CONCRETO 2 1/2\""), precioPorKg: 56.70, precioPorBulto: 1417.45 },
  { categoria: "Acero", material: "VARILLA 1/2\"", unidad: "TON", marca: inferMarca("VARILLA 1/2\""), precioPorTonelada: 18690.00, precioPorPieza: 222.50 },
  { categoria: "Acero", material: "VARILLA 3/8\"", unidad: "TON", marca: inferMarca("VARILLA 3/8\""), precioPorTonelada: 18690.00, precioPorPieza: 125.44 },
  { categoria: "Acero", material: "VARILLA 5/8\"", unidad: "TON", marca: inferMarca("VARILLA 5/8\""), precioPorTonelada: 18690.00, precioPorPieza: 352.64 },
  { categoria: "Acero", material: "VARILLA 3/4\"", unidad: "TON", marca: inferMarca("VARILLA 3/4\""), precioPorTonelada: 18690.00, precioPorPieza: 519.17 },
  { categoria: "Acero", material: "VARILLA 1\"", unidad: "TON", marca: inferMarca("VARILLA 1\""), precioPorTonelada: 18690.00, precioPorPieza: 890.00 },
  { categoria: "Acero", material: "VARILLA GRADO 6000 5/16\"", unidad: "TON", marca: inferMarca("VARILLA GRADO 6000 5/16\""), precioPorTonelada: 28160.16 },
  { categoria: "Acero", material: "VARILLA GRADO 6000 1/4\"", unidad: "TON", marca: inferMarca("VARILLA GRADO 6000 1/4\""), precioPorTonelada: 28160.16 },
  { categoria: "Acero", material: "VARILLA GRADO 6000 3/16\"", unidad: "TON", marca: inferMarca("VARILLA GRADO 6000 3/16\""), precioPorTonelada: 28160.16 },
  { categoria: "Acero", material: "VARILLA GRADO 6000 5/32\"", unidad: "TON", marca: inferMarca("VARILLA GRADO 6000 5/32\""), precioPorTonelada: 28160.16 },
  { categoria: "Acero", material: "MALLA 6-6/10-10", unidad: "ROLLO", marca: inferMarca("MALLA 6-6/10-10"), precioPorRollo: 1816.50 },
  { categoria: "Acero", material: "MALLA 6-6/8-8", unidad: "ROLLO", marca: inferMarca("MALLA 6-6/8-8"), precioPorRollo: 2719.50 },
  { categoria: "Acero", material: "MALLA 6-6/6-6", unidad: "ROLLO", marca: inferMarca("MALLA 6-6/6-6"), precioPorRollo: 3675.00 },
  { categoria: "Acero", material: "MALLA 6-6/4-4", unidad: "ROLLO", marca: inferMarca("MALLA 6-6/4-4"), precioPorRollo: 5533.50 },
  { categoria: "Acero", material: "ARMEX 10X10 (15-15)", unidad: "PZA", marca: inferMarca("ARMEX 10X10 (15-15)"), precioPorPieza: 134.39 },
  { categoria: "Acero", material: "ARMEX 10X15 (15-20)", unidad: "PZA", marca: inferMarca("ARMEX 10X15 (15-20)"), precioPorPieza: 134.39 },
  { categoria: "Acero", material: "ARMEX 10X20 (15-25)", unidad: "PZA", marca: inferMarca("ARMEX 10X20 (15-25)"), precioPorPieza: 147.00 },
  { categoria: "Acero", material: "ARMEX 10X25 (15-30)", unidad: "PZA", marca: inferMarca("ARMEX 10X25 (15-30)"), precioPorPieza: 147.00 },
  { categoria: "Acero", material: "ALAMBRÓN", unidad: "TON", marca: inferMarca("ALAMBRÓN"), precioPorTonelada: 19740.00, precioPorKg: 19.74 },
  { categoria: "Acero", material: "ALAMBRE RECOCIDO", unidad: "TON", marca: inferMarca("ALAMBRE RECOCIDO"), precioPorTonelada: 22995.00, precioPorKg: 22.99 },
  { categoria: "Acero", material: "ANILLO 10X10 (15-15)", unidad: "KG", marca: inferMarca("ANILLO 10X10 (15-15)"), precioPorKg: 3.13, precioPorPieza: 25.06 },
  { categoria: "Acero", material: "ANILLO 10X15 (15-20)", unidad: "KG", marca: inferMarca("ANILLO 10X15 (15-20)"), precioPorKg: 4.18, precioPorPieza: 25.06 },
  { categoria: "Acero", material: "ANILLO 10X20 (15-25)", unidad: "KG", marca: inferMarca("ANILLO 10X20 (15-25)"), precioPorKg: 4.18, precioPorPieza: 25.06 },
  { categoria: "Acero", material: "ANILLO 10X25 (15-30)", unidad: "KG", marca: inferMarca("ANILLO 10X25 (15-30)"), precioPorKg: 5.01, precioPorPieza: 25.06 },

  // CONSTRUCCIÓN LIGERA
  { categoria: "Construcción ligera", material: "POSTE METÁLICO LIGERO GALV PE4103 CAL 26 3.05M", unidad: "PZA", marca: inferMarca("POSTE METÁLICO LIGERO GALV PE4103 CAL 26 3.05M"), precioPorPieza: 47.22 },
  { categoria: "Construcción ligera", material: "ÁNGULO DE AMARRE GALV CAL 24 26 3.05M", unidad: "PZA", marca: inferMarca("ÁNGULO DE AMARRE GALV CAL 24 26 3.05M"), precioPorPieza: 23.53 },
  { categoria: "Construcción ligera", material: "CANAL DE AMARRE LIGERO GALV C410 CAL 26 3.05M", unidad: "PZA", marca: inferMarca("CANAL DE AMARRE LIGERO GALV C410 CAL 26 3.05M"), precioPorPieza: 38.94 },
  { categoria: "Construcción ligera", material: "POSTE METÁLICO LIGERO GALV PE935 CAL 26 3.05M", unidad: "PZA", marca: inferMarca("POSTE METÁLICO LIGERO GALV PE935 CAL 26 3.05M"), precioPorPieza: 57.21 },
  { categoria: "Construcción ligera", material: "CANAL LISTÓN LIGERO GALV CL635 CAL 26 3.05M", unidad: "PZA", marca: inferMarca("CANAL LISTÓN LIGERO GALV CL635 CAL 26 3.05M"), precioPorPieza: 45.45 },
  { categoria: "Construcción ligera", material: "CANAL DE AMARRE LIGERO GALV C635 CAL 26 3.05M", unidad: "PZA", marca: inferMarca("CANAL DE AMARRE LIGERO GALV C635 CAL 26 3.05M"), precioPorPieza: 48.69 },
  { categoria: "Construcción ligera", material: "CANALETA DE CARGA ESTRUCTURAL GALV CC1 CAL 22 3.05M", unidad: "PZA", marca: inferMarca("CANALETA DE CARGA ESTRUCTURAL GALV CC1 CAL 22 3.05M"), precioPorPieza: 40.98 },
  { categoria: "Construcción ligera", material: "REBORDE 1/2 CAL 26 3.05M", unidad: "PZA", marca: inferMarca("REBORDE 1/2 CAL 26 3.05M"), precioPorPieza: 23.13 },
  { categoria: "Construcción ligera", material: "ESQUINERO METALICO 1\" X 3.05M", unidad: "PZA", marca: inferMarca("ESQUINERO METALICO 1\" X 3.05M"), precioPorPieza: 21.64 },
  { categoria: "Construcción ligera", material: "POSTE METÁLICO ESTRUCTURAL GALV PE4103 CAL20 3.05M", unidad: "PZA", marca: inferMarca("POSTE METÁLICO ESTRUCTURAL GALV PE4103 CAL20 3.05M"), precioPorPieza: 116.07 },
  { categoria: "Construcción ligera", material: "CANAL DE AMARRE ESTRUCTURAL GALV CE410 CAL22 3.05M", unidad: "PZA", marca: inferMarca("CANAL DE AMARRE ESTRUCTURAL GALV CE410 CAL22 3.05M"), precioPorPieza: 66.50 },
  { categoria: "Construcción ligera", material: "CINTA PARA JUNTAS PAPEL (5cm X 76.2 m)", unidad: "PZA", marca: inferMarca("CINTA PARA JUNTAS PAPEL (5cm X 76.2 m)"), precioPorPieza: 75.74 },
  { categoria: "Construcción ligera", material: "CINTA FIBRA DE VIDRIO E (10cm X 45m)", unidad: "PZA", marca: inferMarca("CINTA FIBRA DE VIDRIO E (10cm X 45m)"), precioPorPieza: 121.61 },
  { categoria: "Construcción ligera", material: "CINTA METAL CORNER (5.1cm X 30.5m)", unidad: "PZA", marca: inferMarca("CINTA METAL CORNER (5.1cm X 30.5m)"), precioPorPieza: 448.56 },
  { categoria: "Construcción ligera", material: "Aislachek R8 2.5'' (61 x 1524cm) (BOLSA CON 2 PZAS)", unidad: "BOLSA", marca: inferMarca("Aislachek R8 2.5'' (61 x 1524cm) (BOLSA CON 2 PZAS)"), precioPorBolsa: 1331.66 },
  { categoria: "Construcción ligera", material: "RD+ MIX BÁSICO CAJA 22KG", unidad: "CAJA", marca: inferMarca("RD+ MIX BÁSICO CAJA 22KG"), precioPorCaja: 293.67 },
  { categoria: "Construcción ligera", material: "PLAKA LT (12.7mm X 1.22mX2.44m)", unidad: "PZA", marca: inferMarca("PLAKA LT (12.7mm X 1.22mX2.44m)"), precioPorPieza: 182.60 },
  { categoria: "Construcción ligera", material: "Plaka RH (12.7mm X 1.22mX2.44m)", unidad: "PZA", marca: inferMarca("Plaka RH (12.7mm X 1.22mX2.44m)"), precioPorPieza: 255.12 },
  { categoria: "Construcción ligera", material: "Plaka RH (15.9mm X 1.22mX2.44m)", unidad: "PZA", marca: inferMarca("Plaka RH (15.9mm X 1.22mX2.44m)"), precioPorPieza: 316.01 },
  { categoria: "Construcción ligera", material: "Plaka RF (12.7mm X 1.22mX2.44m)", unidad: "PZA", marca: inferMarca("Plaka RF (12.7mm X 1.22mX2.44m)"), precioPorPieza: 194.60 },
  { categoria: "Construcción ligera", material: "Plaka RF (15.9mm X 1.22mX2.44m)", unidad: "PZA", marca: inferMarca("Plaka RF (15.9mm X 1.22mX2.44m)"), precioPorPieza: 287.21 },
  { categoria: "Construcción ligera", material: "X-terium ® (12.7mm x 1.22m x 2.44m)", unidad: "PZA", marca: inferMarca("X-terium ® (12.7mm x 1.22m x 2.44m)"), precioPorPieza: 693.86 },
  { categoria: "Construcción ligera", material: "Aquaroc Max ® (12.7 mm x 1.22m x 2.44m)", unidad: "PZA", marca: inferMarca("Aquaroc Max ® (12.7 mm x 1.22m x 2.44m)"), precioPorPieza: 750.63 },
  { categoria: "Construcción ligera", material: "Cemento - metal 20 - 1 5/8\"", unidad: "PZA", marca: inferMarca("Cemento - metal 20 - 1 5/8\""), precioPorPieza: 0.71 },
  { categoria: "Construcción ligera", material: "TORNILLOS YESO-METAL 26- 1\"", unidad: "PZA", marca: inferMarca("TORNILLOS YESO-METAL 26- 1\""), precioPorPieza: 0.20 },
  { categoria: "Construcción ligera", material: "CINTA FIBAPANTE FV AR BUNKER (10cm X 46m)", unidad: "PZA", marca: inferMarca("CINTA FIBAPANTE FV AR BUNKER (10cm X 46m)"), precioPorPieza: 387.47 },
  { categoria: "Construcción ligera", material: "TORNILLO METAL-METAL 26- 1/2\"", unidad: "PZA", marca: inferMarca("TORNILLO METAL-METAL 26- 1/2\""), precioPorPieza: 0.27 },
  { categoria: "Construcción ligera", material: "BUNKER MAX BASE COAT 20 KG", unidad: "BTO", marca: inferMarca("BUNKER MAX BASE COAT 20 KG"), precioPorBulto: 365.86 },
  { categoria: "Construcción ligera", material: "Cemento - metal 20 - 1 1/4\"", unidad: "PZA", marca: inferMarca("Cemento - metal 20 - 1 1/4\""), precioPorPieza: 0.64 },
  { categoria: "Construcción ligera", material: "TORNILLO YESO-METAL 1 CAL 20", unidad: "PZA", marca: inferMarca("TORNILLO YESO-METAL 1 CAL 20"), precioPorPieza: 0.22 },
  { categoria: "Construcción ligera", material: "TORNILLO YESO-METAL 1 5/8\" CAL 26", unidad: "PZA", marca: inferMarca("TORNILLO YESO-METAL 1 5/8\" CAL 26"), precioPorPieza: 0.29 },
  { categoria: "Construcción ligera", material: "CLAVO PARA CONCRETO FISCHER FN27 CAJA CON 100 PZAS", unidad: "CAJA", marca: inferMarca("CLAVO PARA CONCRETO FISCHER FN27 CAJA CON 100 PZAS"), precioPorCaja: 115.58 },
  { categoria: "Construcción ligera", material: "CLAVOS FIJACIÓN CON ESCUADRA 1\" FISCHER FNC27 CAJA CON 100 PZAS", unidad: "CAJA", marca: inferMarca("CLAVOS FIJACIÓN CON ESCUADRA 1\" FISCHER FNC27 CAJA CON 100 PZAS"), precioPorCaja: 212.72 },
  { categoria: "Construcción ligera", material: "FULMINANTE CARTUCHO FISCHER CAL 27 TIRA AMARILLA CAJA CON 100 PZAS", unidad: "CAJA", marca: inferMarca("FULMINANTE CARTUCHO FISCHER CAL 27 TIRA AMARILLA CAJA CON 100 PZAS"), precioPorCaja: 159.85 },
  { categoria: "Construcción ligera", material: "FULMINANTE CARTUCHO FISCHER CAL 27 TIRA ROJA CAJA CON 100 PZAS", unidad: "CAJA", marca: inferMarca("FULMINANTE CARTUCHO FISCHER CAL 27 TIRA ROJA CAJA CON 100 PZAS"), precioPorCaja: 159.85 },
  { categoria: "Construcción ligera", material: "FULMINANTE FISCHER CAL 22 AMARILLO CAJA CON 100 PZA", unidad: "CAJA", marca: inferMarca("FULMINANTE FISCHER CAL 22 AMARILLO CAJA CON 100 PZA"), precioPorCaja: 159.85 },
  { categoria: "Construcción ligera", material: "FISCHER INJECTION MORTAR FIS V 360 S 570g", unidad: "PZA", marca: inferMarca("FISCHER INJECTION MORTAR FIS V 360 S 570g"), precioPorPieza: 748.56 },

  // CIMBRA
  { categoria: "Cimbra", material: "BARROTE DE 1 1/2\" X3\"X 8'", unidad: "PZA", marca: inferMarca("BARROTE DE 1 1/2\" X3\"X 8'"), precioPorPieza: 51.64 },
  { categoria: "Cimbra", material: "POLIN 3\"X3\"X8'", unidad: "PZA", marca: inferMarca("POLIN 3\"X3\"X8'"), precioPorPieza: 100.91 },
  { categoria: "Cimbra", material: "TRIPLAY 18MM", unidad: "PZA", marca: inferMarca("TRIPLAY 18MM"), precioPorPieza: 779.11 },
  { categoria: "Cimbra", material: "TABLA 3a DE 30CM", unidad: "PZA", marca: inferMarca("TABLA 3a DE 30CM"), precioPorPieza: 178.29 },
  { categoria: "Cimbra", material: "TRIPLAY 15MM", unidad: "PZA", marca: inferMarca("TRIPLAY 15MM"), precioPorPieza: 641.30 },
  { categoria: "Cimbra", material: "DUELA PARA CONSTRUCCIÓN 3/4\"X4\"X8'", unidad: "PZA", marca: inferMarca("DUELA PARA CONSTRUCCIÓN 3/4\"X4\"X8'"), precioPorPieza: 55.11 },
  { categoria: "Cimbra", material: "TARIMAS PARA CONSTRUCCIÓN", unidad: "PZA", marca: inferMarca("TARIMAS PARA CONSTRUCCIÓN"), precioPorPieza: 104.52 },
  { categoria: "Cimbra", material: "CHAFLAN", unidad: "PZA", marca: inferMarca("CHAFLAN"), precioPorPieza: 18.44 },
];