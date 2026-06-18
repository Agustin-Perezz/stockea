-- Seed users and suppliers needed for product references
INSERT INTO public.users (id, email, full_name, role) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'oggier@distribuidora.com', 'Distribuidora Oggier S.R.L.', 'supplier'),
  ('a0000000-0000-0000-0000-000000000002', 'martina@distribuidora.com', 'Distribuidora Martina', 'supplier')
ON CONFLICT (email) DO NOTHING;

INSERT INTO public.suppliers (user_id, business_name, address, phone, delivery_day) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'Distribuidora Oggier', 'Av. Corrientes 1234, CABA', '011-4567-8901', 1),
  ('a0000000-0000-0000-0000-000000000002', 'Distribuidora Martina', 'Calle Lavalle 567, CABA', '011-4321-0987', 4)
ON CONFLICT (user_id) DO UPDATE SET
  delivery_day = EXCLUDED.delivery_day;

-- Seed data for ltree categories based on docs/lista_esperanza_categories.md
-- Path labels: lowercase ASCII snake_case (accents stripped, spaces → _, / → _y_)
-- Name: short display name only (e.g., "Bondiola", not "Fiambres - Bondiola")
-- Position: per-parent ordering (resets within each parent group)

INSERT INTO public.categories (name, path, position) VALUES

-- FIAMBRES (root position 1)
('Fiambres', 'fiambres', 1),
('Bondiola', 'fiambres.bondiola', 1),
('Jamon Cocido', 'fiambres.jamon_cocido', 2),
('Jamon Crudo', 'fiambres.jamon_crudo', 3),
('Lomo Cocido', 'fiambres.lomo_cocido', 4),
('Milan', 'fiambres.milan', 5),
('Mortadela', 'fiambres.mortadela', 6),
('Paleta Cocida', 'fiambres.paleta_cocida', 7),
('Queso de Cerdo', 'fiambres.queso_de_cerdo', 8),
('Salame / Salamin', 'fiambres.salame_salamin', 9),
('Salchichon', 'fiambres.salchichon', 10),
('Arrollados', 'fiambres.arrollados', 11),
('Fetas', 'fiambres.fetas', 12),
('Salchichas', 'fiambres.salchichas', 13),

-- EMBUTIDOS (root position 2)
('Embutidos', 'embutidos', 2),
('Pancetas', 'embutidos.pancetas', 1),
('Salamines y Leber', 'embutidos.salamines_y_leber', 2),
('Salchichas', 'embutidos.salchichas', 3),
('Chorizos', 'embutidos.chorizos', 4),
('Pepperoni', 'embutidos.pepperoni', 5),
('Pizzetas', 'embutidos.pizzetas', 6),

-- CONGELADOS (root position 3)
('Congelados', 'congelados', 3),
('Hamburguesas', 'congelados.hamburguesas', 1),
('Medallones de Carne', 'congelados.medallones_de_carne', 2),
('Medallones de Pollo', 'congelados.medallones_de_pollo', 3),
('Rebozados', 'congelados.rebozados', 4),
('Papas Baston / Precocidas', 'congelados.papas_baston_precocidas', 5),
('Carne Picada Congelada', 'congelados.carne_picada_congelada', 6),
('Nuggets', 'congelados.nuggets', 7),
('Crunchies / Bocaditos de Pollo', 'congelados.crunchies_bocaditos_de_pollo', 8),
('Milanesas de Carne Congeladas', 'congelados.milanesas_de_carne_congeladas', 9),
('Pizza Congelada', 'congelados.pizza_congelada', 10),

-- QUESOS (root position 4)
('Quesos', 'quesos', 4),
('Mozzarella', 'quesos.mozzarella', 1),
('Sardo', 'quesos.sardo', 2),
('Cremoso', 'quesos.cremoso', 3),
('Tybo', 'quesos.tybo', 4),
('Cuartirolo', 'quesos.cuartirolo', 5),
('Pategras', 'quesos.pategras', 6),
('Danbo', 'quesos.danbo', 7),
('Fynbo', 'quesos.fynbo', 8),
('Cheddar', 'quesos.cheddar', 9),
('Gouda', 'quesos.gouda', 10),
('Gruyerito', 'quesos.gruyerito', 11),
('Romanito', 'quesos.romanito', 12),
('Fontina', 'quesos.fontina', 13),
('Queso Azul', 'quesos.queso_azul', 14),
('Provoleta / Provolone', 'quesos.provoleta_provolone', 15),
('Queso Untable', 'quesos.queso_untable', 16),
('Queso Blanco', 'quesos.queso_blanco', 17),
('Queso Rallado', 'quesos.queso_rallado', 18),
('Pasta de Queso Azul / Roqueford', 'quesos.pasta_de_queso_azul_roqueford', 19),
('Balde Pasta', 'quesos.balde_pasta', 20),

-- LACTEOS (root position 5)
('Lacteos', 'lacteos', 5),
('Leches Fluidas', 'lacteos.leches_fluidas', 1),
('Leches en Polvo', 'lacteos.leches_en_polvo', 2),
('Crema', 'lacteos.crema', 3),
('Dulce de Leche', 'lacteos.dulce_de_leche', 4),
('Manteca', 'lacteos.manteca', 5),
('Yogur Bebible', 'lacteos.yogur_bebible', 6),
('Yogur Firme', 'lacteos.yogur_firme', 7),
('Yogur con Trozos / Cereales', 'lacteos.yogur_con_trozos_cereales', 8),
('Yogur Frutado', 'lacteos.yogur_frutado', 9),
('Yogur Diet / Descremado', 'lacteos.yogur_diet_descremado', 10),
('Postres', 'lacteos.postres', 11),
('Flanes', 'lacteos.flanes', 12),

-- MARGARINAS (root position 6)
('Margarinas', 'margarinas', 6),
('Margarina Tradicional', 'margarinas.margarina_tradicional', 1),
('Margarina Soft / Equilibrio', 'margarinas.margarina_soft_equilibrio', 2),
('Margarina Dorada Cremosa', 'margarinas.margarina_dorada_cremosa', 3),

-- MAYONESAS (root position 7)
('Mayonesas', 'mayonesas', 7),
('Mayonesa Clasica', 'mayonesas.mayonesa_clasica', 1),
('Mayonesa Premium', 'mayonesas.mayonesa_premium', 2),

-- ADEREZOS (root position 8)
('Aderezos', 'aderezos', 8),
('Ketchup', 'aderezos.ketchup', 1),
('Mostaza', 'aderezos.mostaza', 2),
('Salsa Golf', 'aderezos.salsa_golf', 3),
('Salsa Barbacoa', 'aderezos.salsa_barbacoa', 4),
('Chimichurri', 'aderezos.chimichurri', 5),
('Aceto Balsamico', 'aderezos.aceto_balsamico', 6),
('Jugo de Limon', 'aderezos.jugo_de_limon', 7),
('Aderezos Especiales', 'aderezos.aderezos_especiales', 8),

-- ACEITES (root position 9)
('Aceites', 'aceites', 9),
('Aceite Girasol', 'aceites.aceite_girasol', 1),
('Aceite Oliva', 'aceites.aceite_oliva', 2),
('Rocio Vegetal', 'aceites.rocio_vegetal', 3),
('Aceite 5 lt', 'aceites.aceite_5_lt', 4),

-- GRASAS (root position 10)
('Grasas', 'grasas', 10),
('Grasa de Cerdo', 'grasas.grasa_de_cerdo', 1),
('Grasa Vacuna', 'grasas.grasa_vacuna', 2),

-- ARROZ (root position 11)
('Arroz', 'arroz', 11),
('Arroz Largo Fino', 'arroz.arroz_largo_fino', 1),
('Arroz Parboil', 'arroz.arroz_parboil', 2),
('Arroz Integral', 'arroz.arroz_integral', 3),

-- AZUCAR (root position 12)
('Azucar', 'azucar', 12),
('Azucar Comun', 'azucar.azucar_comun', 1),

-- YERBAS (root position 13)
('Yerbas', 'yerbas', 13),
('Yerba Comun / Tradicional', 'yerbas.yerba_comun_tradicional', 1),
('Yerba Suave', 'yerbas.yerba_suave', 2),
('Yerba Despallada', 'yerbas.yerba_despallada', 3),
('Yerba Compuesta', 'yerbas.yerba_compuesta', 4),
('Yerba con Sabor', 'yerbas.yerba_con_sabor', 5),
('Yerba Organica', 'yerbas.yerba_organica', 6),
('Yerba Barbacua / Campo / Monte', 'yerbas.yerba_barbacua_campo_monte', 7),
('Yerba para Terere', 'yerbas.yerba_para_terere', 8),

-- TAPAS (root position 14)
('Tapas', 'tapas', 14),
('Tapas de Empanada', 'tapas.tapas_de_empanada', 1),
('Tapas de Pascualina', 'tapas.tapas_de_pascualina', 2),

-- FIDEOS (root position 15)
('Fideos', 'fideos', 15),
('Fideos Nido', 'fideos.fideos_nido', 1),
('Fideos Tallarines', 'fideos.fideos_tallarines', 2),
('Fideos Mono', 'fideos.fideos_mono', 3),
('Fideos Rosca', 'fideos.fideos_rosca', 4),
('Fideos Vermicelli', 'fideos.fideos_vermicelli', 5),
('Fideos Integrales', 'fideos.fideos_integrales', 6),
('Fideos Codo / Codito', 'fideos.fideos_codo_codito', 7),
('Fideos Mostachol', 'fideos.fideos_mostachol', 8),
('Fideos Rigatti / Rigatoni', 'fideos.fideos_rigatti_rigatoni', 9),
('Fideos Spaghetti', 'fideos.fideos_spaghetti', 10),
('Fideos Tirabuzon', 'fideos.fideos_tirabuzon', 11),
('Fideos Fusiles', 'fideos.fideos_fusiles', 12),
('Capelettini', 'fideos.capelettini', 13),
('Sorrentinos', 'fideos.sorrentinos', 14),
('Ravioles', 'fideos.ravioles', 15),
('Nognocis', 'fideos.nognocis', 16),
('Fideos Municiones / Dedalitos', 'fideos.fideos_municiones_dedalitos', 17),
('Sopas', 'fideos.sopas', 18),
('Caldos', 'fideos.caldos', 19),

-- SAL (root position 16)
('Sal', 'sal', 16),
('Sal Fina', 'sal.sal_fina', 1),
('Sal Entrefina', 'sal.sal_entrefina', 2),
('Sal Gruesa', 'sal.sal_gruesa', 3),
('Sal Gastronomica', 'sal.sal_gastronomica', 4),

-- VINAGRE (root position 17)
('Vinagre', 'vinagre', 17),
('Vinagre Alcohol', 'vinagre.vinagre_alcohol', 1),
('Vinagre Manzana', 'vinagre.vinagre_manzana', 2),
('Vinagre Vino', 'vinagre.vinagre_vino', 3),

-- TE (root position 18)
('Te', 'te', 18),
('Te Comun', 'te.te_comun', 1),
('Te Negro', 'te.te_negro', 2),
('Te Verde', 'te.te_verde', 3),
('Te Rojo', 'te.te_rojo', 4),
('Te Saborizado', 'te.te_saborizado', 5),
('Te Hierbas / Infusiones', 'te.te_hierbas_infusiones', 6),
('Te Chai', 'te.te_chai', 7),
('Mate Cocido', 'te.mate_cocido', 8),

-- CAFE Y MALTAS (root position 19)
('Cafe y Maltas', 'cafe_y_maltas', 19),
('Cafe en Saquitos', 'cafe_y_maltas.cafe_en_saquitos', 1),
('Cafe Instantaneo', 'cafe_y_maltas.cafe_instantaneo', 2),
('Cafe Torrado / Molido', 'cafe_y_maltas.cafe_torrado_molido', 3),
('Cappuccino', 'cafe_y_maltas.cappuccino', 4),
('Cortado / Latte', 'cafe_y_maltas.cortado_latte', 5),
('Capsulas', 'cafe_y_maltas.capsulas', 6),
('Malta', 'cafe_y_maltas.malta', 7),
('Filtros de Papel', 'cafe_y_maltas.filtros_de_papel', 8),

-- EDULCORANTES (root position 20)
('Edulcorantes', 'edulcorantes', 20),
('Edulcorante Liquido Clasico', 'edulcorantes.edulcorante_liquido_clasico', 1),
('Edulcorante Stevia', 'edulcorantes.edulcorante_stevia', 2),
('Edulcorante Sucralosa', 'edulcorantes.edulcorante_sucralosa', 3),
('Edulcorante Sobres', 'edulcorantes.edulcorante_sobres', 4),

-- MERMELADAS Y DULCES (root position 21)
('Mermeladas y Dulces', 'mermeladas_y_dulces', 21),
('Mermeladas', 'mermeladas_y_dulces.mermeladas', 1),
('Mermeladas Light / Sin Azucar', 'mermeladas_y_dulces.mermeladas_light_sin_azucar', 2),
('Dulce de Leche', 'mermeladas_y_dulces.dulce_de_leche', 3),
('Membrillo', 'mermeladas_y_dulces.membrillo', 4),
('Batata', 'mermeladas_y_dulces.batata', 5),
('Miel', 'mermeladas_y_dulces.miel', 6),

-- POSTRES, FLANES Y GELATINA (root position 22)
('Postres, Flanes y Gelatina', 'postres_flanes_y_gelatina', 22),
('Flanes', 'postres_flanes_y_gelatina.flanes', 1),
('Gelatina', 'postres_flanes_y_gelatina.gelatina', 2),
('Postres', 'postres_flanes_y_gelatina.postres', 3),

-- LEGUMBRES SECAS (root position 23)
('Legumbres Secas', 'legumbres_secas', 23),
('Arvejas', 'legumbres_secas.arvejas', 1),
('Lentejas', 'legumbres_secas.lentejas', 2),
('Garbanzos', 'legumbres_secas.garbanzos', 3),
('Porotos', 'legumbres_secas.porotos', 4),
('Avena', 'legumbres_secas.avena', 5),
('Semola', 'legumbres_secas.semola', 6),
('Harinas', 'legumbres_secas.harinas', 7),
('Polenta', 'legumbres_secas.polenta', 8),
('Semillas', 'legumbres_secas.semillas', 9),
('Maiz Pisingallo', 'legumbres_secas.maiz_pisingallo', 10),
('Trigo Burgol', 'legumbres_secas.trigo_burgol', 11),

-- FRUTAS SECAS (root position 24)
('Frutas Secas', 'frutas_secas', 24),
('A Granel', 'frutas_secas.a_granel', 1),
('En Paquetes', 'frutas_secas.en_paquetes', 2),

-- ENLATADOS (root position 25)
('Enlatados', 'enlatados', 25),
('Conservas de Carne', 'enlatados.conservas_de_carne', 1),
('Conservas de Frutas', 'enlatados.conservas_de_frutas', 2),
('Conservas de Pescado', 'enlatados.conservas_de_pescado', 3),
('Conservas de Vegetales', 'enlatados.conservas_de_vegetales', 4),

-- VINOS (root position 26)
('Vinos', 'vinos', 26),
('Vino Tinto', 'vinos.vino_tinto', 1),
('Vino Blanco', 'vinos.vino_blanco', 2),
('Vino Rosado', 'vinos.vino_rosado', 3),
('Vino Dulce', 'vinos.vino_dulce', 4),
('Vinos Tetra', 'vinos.vinos_tetra', 5),
('Espumantes', 'vinos.espumantes', 6),
('Sidras', 'vinos.sidras', 7),

-- BEBIDAS BLANCAS (root position 27)
('Bebidas Blancas', 'bebidas_blancas', 27),
('Gin', 'bebidas_blancas.gin', 1),
('Whisky', 'bebidas_blancas.whisky', 2),
('Pulpas', 'bebidas_blancas.pulpas', 3),

-- JUGOS Y SODAS (root position 28)
('Jugos y Sodas', 'jugos_y_sodas', 28),
('Gaseosas y Aguas Saborizadas', 'jugos_y_sodas.gaseosas_y_aguas_saborizadas', 1),
('Jugos Liquidos', 'jugos_y_sodas.jugos_liquidos', 2),
('Jugos en Sobres', 'jugos_y_sodas.jugos_en_sobres', 3),
('Sodas y Agua Mineral', 'jugos_y_sodas.sodas_y_agua_mineral', 4),

-- GALLETITAS (root position 29)
('Galletitas', 'galletitas', 29),
('Galletas Dulces', 'galletitas.galletas_dulces', 1),
('Galletas Saladas', 'galletitas.galletas_saladas', 2),
('Surtidos', 'galletitas.surtidos', 3),
('Vainillas', 'galletitas.vainillas', 4),
('Tostadas de Arroz', 'galletitas.tostadas_de_arroz', 5),
('Cintitas Saborizadas', 'galletitas.cintitas_saborizadas', 6),
('Grisines', 'galletitas.grisines', 7),
('Pepas y Frolitas', 'galletitas.pepas_y_frolitas', 8),
('Magdalenas / Budines', 'galletitas.magdalenas_budines', 9),
('Brownie', 'galletitas.brownie', 10),

-- FIESTAS NAVIDEGNAS (root position 30)
('Fiestas Navidenas', 'fiestas_navidenas', 30),
('Pan Dulce', 'fiestas_navidenas.pan_dulce', 1),
('Budines', 'fiestas_navidenas.budines', 2),
('Turrones', 'fiestas_navidenas.turrones', 3),
('Garrapignada', 'fiestas_navidenas.garrapignada', 4),
('Mani Banado / Confitado', 'fiestas_navidenas.mani_banado_confitado', 5),
('Almendras Banadas', 'fiestas_navidenas.almendras_banadas', 6),
('Pasas Banadas', 'fiestas_navidenas.pasas_banadas', 7),

-- INGREDIENTES PARA COPETIN (root position 31)
('Ingredientes para Copetin', 'ingredientes_para_copetin', 31),
('Papas Fritas', 'ingredientes_para_copetin.papas_fritas', 1),
('Palitos Salados', 'ingredientes_para_copetin.palitos_salados', 2),
('Chizitos', 'ingredientes_para_copetin.chizitos', 3),
('Mani', 'ingredientes_para_copetin.mani', 4),
('Mani Recubierto', 'ingredientes_para_copetin.mani_recubierto', 5),

-- ENCURTIDOS CHICOS (root position 32)
('Encurtidos Chicos', 'encurtidos_chicos', 32),
('Aceitunas', 'encurtidos_chicos.aceitunas', 1),
('Cebollitas en Vinagre', 'encurtidos_chicos.cebollitas_en_vinagre', 2),
('Morrones', 'encurtidos_chicos.morrones', 3),
('Pepinillos', 'encurtidos_chicos.pepinillos', 4),
('Pickles', 'encurtidos_chicos.pickles', 5),
('Pasteles de Carne', 'encurtidos_chicos.pasteles_de_carne', 6),

-- ENCURTIDOS GRANDES (root position 33)
('Encurtidos Grandes', 'encurtidos_grandes', 33),
('Baldes de Aceitunas', 'encurtidos_grandes.baldes_de_aceitunas', 1),
('Baldes de Pickles', 'encurtidos_grandes.baldes_de_pickles', 2),
('Potes de Aceitunas', 'encurtidos_grandes.potes_de_aceitunas', 3),
('Lupines', 'encurtidos_grandes.lupines', 4),

-- CONDIMENTOS (root position 34)
('Condimentos', 'condimentos', 34),
('En Sobres', 'condimentos.en_sobres', 1),
('Mezclas y Mixes', 'condimentos.mezclas_y_mixes', 2),
('Saborizadores', 'condimentos.saborizadores', 3),
('Condimentos por Tipo', 'condimentos.condimentos_por_tipo', 4),
('A Granel por Kg', 'condimentos.a_granel_por_kg', 5),
('Salsas en Polvo', 'condimentos.salsas_en_polvo', 6),

-- ANCHOAS (root position 35)
('Anchoas', 'anchoas', 35),
('Anchoas en Aceite', 'anchoas.anchoas_en_aceite', 1),
('Anchoas en Sal', 'anchoas.anchoas_en_sal', 2),
('Anchoas Filet', 'anchoas.anchoas_filet', 3),
('Anchoas Pasta', 'anchoas.anchoas_pasta', 4),

-- GOLOSINAS (root position 36)
('Golosinas', 'golosinas', 36),
('Cereal Mix', 'golosinas.cereal_mix', 1),
('Malvavisco', 'golosinas.malvavisco', 2),
('Postre de Mani', 'golosinas.postre_de_mani', 3),
('Turron / Turroc', 'golosinas.turron_turroc', 4),

-- CARAMELOS (root position 37)
('Caramelos', 'caramelos', 37),
('Duros', 'caramelos.duros', 1),
('Gomas', 'caramelos.gomas', 2),
('Masticables', 'caramelos.masticables', 3),
('Rellenos', 'caramelos.rellenos', 4),

-- CHICLES Y CHUPETINES (root position 38)
('Chicles y Chupetines', 'chicles_y_chupetines', 38),
('Chicles', 'chicles_y_chupetines.chicles', 1),
('Chupetines', 'chicles_y_chupetines.chupetines', 2),

-- ALFAJORES (root position 39)
('Alfajores', 'alfajores', 39),
('Alfajores Simples', 'alfajores.alfajores_simples', 1),
('Alfajores Triples', 'alfajores.alfajores_triples', 2),
('Alfajores Santafesinos', 'alfajores.alfajores_santafesinos', 3),
('Brownie', 'alfajores.brownie', 4),

-- CHOCOLATES (root position 40)
('Chocolates', 'chocolates', 40),
('Chocolate para Taza', 'chocolates.chocolate_para_taza', 1),
('Bombones', 'chocolates.bombones', 2),
('Obleas', 'chocolates.obleas', 3),
('Rocklets', 'chocolates.rocklets', 4),
('Tabletas', 'chocolates.tabletas', 5),

-- ALIMENTO P/ MASCOTAS (root position 41)
('Alimento para Mascotas', 'alimento_para_mascotas', 41),
('Alimento Gato', 'alimento_para_mascotas.alimento_gato', 1),
('Alimento Perro', 'alimento_para_mascotas.alimento_perro', 2),

-- PANIFICADOS (root position 42)
('Panificados', 'panificados', 42),
('Pan Lactal', 'panificados.pan_lactal', 1),
('Pan Doble Salvado', 'panificados.pan_doble_salvado', 2),
('Pan de Molde con Semillas', 'panificados.pan_de_molde_con_semillas', 3),
('Pan de Mesa', 'panificados.pan_de_mesa', 4),
('Pan Integral', 'panificados.pan_integral', 5),
('Pan para Panchos / Hamburguesas / Lomo', 'panificados.pan_para_panchos_hamburguesas_lomo', 6),
('Pan Dulce', 'panificados.pan_dulce', 7),
('Budines', 'panificados.budines', 8),
('Pionono', 'panificados.pionono', 9),
('Tortillas de Trigo', 'panificados.tortillas_de_trigo', 10),
('Masitas / Vainillas Artesanales', 'panificados.masitas_vainillas_artesanales', 11),

-- FILOS (root position 43)
('Filos', 'filos', 43),
('Hojas de Afeitar', 'filos.hojas_de_afeitar', 1),
('Descartables', 'filos.descartables', 2),
('Repuestos', 'filos.repuestos', 3),

-- LIMPIEZA (root position 44)
('Limpieza', 'limpieza', 44),
('Baldes y Fuentones', 'limpieza.baldes_y_fuentones', 1),
('Desinfectante Multiuso', 'limpieza.desinfectante_multiuso', 2),
('Detergentes / Lavavajillas', 'limpieza.detergentes_lavavajillas', 3),
('Escobas, Escobillones, Cepillos', 'limpieza.escobas_escobillones_cepillos', 4),
('Esponjas y Fibras de Cocina', 'limpieza.esponjas_y_fibras_de_cocina', 5),
('Lavandina', 'limpieza.lavandina', 6),
('Limpiadores Varios', 'limpieza.limpiadores_varios', 7),
('Secadores y Mopas', 'limpieza.secadores_y_mopas', 8),
('Trapos y Panos', 'limpieza.trapos_y_panos', 9),
('Rollo Cocina', 'limpieza.rollo_cocina', 10),

-- HIGIENE PERSONAL (root position 45)
('Higiene Personal', 'higiene_personal', 45),
('Bebes', 'higiene_personal.bebes', 1),
('Bucal', 'higiene_personal.bucal', 2),
('Corporal', 'higiene_personal.corporal', 3),
('Desodorantes', 'higiene_personal.desodorantes', 4),
('Protectores y Toallitas Femeninas', 'higiene_personal.protectores_y_toallitas_femeninas', 5),
('Shampoo y Acondicionador', 'higiene_personal.shampoo_y_acondicionador', 6),
('Cremas', 'higiene_personal.cremas', 7),

-- PAPELES (root position 46)
('Papeles', 'papeles', 46),
('Papel Cocina', 'papeles.papel_cocina', 1),
('Papel Industrial', 'papeles.papel_industrial', 2)

ON CONFLICT (path) DO NOTHING;

-- ============================================================
-- Sample products referencing leaf categories via path lookups
-- ============================================================

INSERT INTO public.products (supplier_id, category_id, name, price_per_unit, original_price, pack_size, is_best_seller, image_url)
SELECT
  s.id, c.id, v.product_name, v.price, v.original_price, v.pack_size, v.best_seller, v.image_url
FROM (VALUES
  -- Fiambres
  ('Distribuidora Oggier', 'fiambres.bondiola', 'Bondiola Picada x 100g', 2850, 3200, 10, true, NULL),
  ('Distribuidora Oggier', 'fiambres.jamon_cocido', 'Jamon Cocido Fete x 100g', 3100, 3500, 10, false, NULL),
  ('Distribuidora Martina', 'fiambres.mortadela', 'Mortadela Chica x 100g', 1800, NULL, 12, false, NULL),
  ('Distribuidora Martina', 'fiambres.salame_salamin', 'Salamin Milan x unidad', 4200, NULL, 8, true, NULL),

  -- Quesos
  ('Distribuidora Oggier', 'quesos.mozzarella', 'Mozzarella x kg', 5800, 6200, 2, true, NULL),
  ('Distribuidora Oggier', 'quesos.cremoso', 'Cremoso Barra x kg', 4500, 4800, 2, false, NULL),
  ('Distribuidora Martina', 'quesos.sardo', 'Sardo x kg', 7200, NULL, 1, false, NULL),
  ('Distribuidora Martina', 'quesos.queso_rallado', 'Queso Rallado 150g', 2100, NULL, 12, true, NULL),

  -- Lacteos
  ('Distribuidora Oggier', 'lacteos.leches_fluidas', 'Leche Entera 1L', 950, 1100, 12, true, NULL),
  ('Distribuidora Martina', 'lacteos.dulce_de_leche', 'Dulce de Leche 500g', 2800, NULL, 6, false, NULL),
  ('Distribuidora Martina', 'lacteos.manteca', 'Manteca 200g', 1800, 2000, 12, false, NULL),
  ('Distribuidora Oggier', 'lacteos.yogur_bebible', 'Yogur Bebible 1L', 1500, 1700, 6, true, NULL),

  -- Vinos
  ('Distribuidora Oggier', 'vinos.vino_tinto', 'Malbec Reserva 750ml', 6500, 7200, 6, true, NULL),
  ('Distribuidora Martina', 'vinos.vino_blanco', 'Chardonnay 750ml', 5800, NULL, 6, false, NULL),
  ('Distribuidora Oggier', 'vinos.espumantes', 'Espumante Extra Brut 750ml', 8900, NULL, 6, true, NULL),

  -- Jugos y Sodas
  ('Distribuidora Martina', 'jugos_y_sodas.gaseosas_y_aguas_saborizadas', 'Gaseosa Cola 2.25L', 1200, 1500, 8, true, NULL),
  ('Distribuidora Oggier', 'jugos_y_sodas.sodas_y_agua_mineral', 'Agua Mineral 1.5L', 650, NULL, 12, false, NULL),
  ('Distribuidora Martina', 'jugos_y_sodas.jugos_liquidos', 'Jugo de Naranja 1L', 1100, 1300, 6, false, NULL),

  -- Congelados
  ('Distribuidora Oggier', 'congelados.hamburguesas', 'Hamburguesas x8', 3500, 4000, 4, true, NULL),
  ('Distribuidora Martina', 'congelados.nuggets', 'Nuggets de Pollo x12', 4200, NULL, 4, false, NULL),
  ('Distribuidora Oggier', 'congelados.papas_baston_precocidas', 'Papas Baston 1kg', 2800, NULL, 6, true, NULL),

  -- Fideos
  ('Distribuidora Martina', 'fideos.fideos_tallarines', 'Tallarines 500g', 980, NULL, 12, false, NULL),
  ('Distribuidora Oggier', 'fideos.ravioles', 'Ravioles de Carne x unidad', 2500, 2800, 4, true, NULL),

  -- Galletitas
  ('Distribuidora Martina', 'galletitas.galletas_dulces', 'Cookies de Chocolate 200g', 1500, NULL, 12, false, NULL),
  ('Distribuidora Oggier', 'galletitas.galletas_saladas', 'Crackers Integrales 250g', 1300, NULL, 12, true, NULL),

  -- Limpieza
  ('Distribuidora Martina', 'limpieza.lavandina', 'Lavandina 5L', 2200, NULL, 4, false, NULL),
  ('Distribuidora Oggier', 'limpieza.detergentes_lavavajillas', 'Detergente 750ml', 1100, 1300, 12, true, NULL),

  -- Yerbas
  ('Distribuidora Oggier', 'yerbas.yerba_comun_tradicional', 'Yerba Tradicional 1kg', 3200, 3500, 6, true, NULL),
  ('Distribuidora Martina', 'yerbas.yerba_con_sabor', 'Yerba con Limon 500g', 2100, NULL, 12, false, NULL)
) AS v(supplier_name, cat_path, product_name, price, original_price, pack_size, best_seller, image_url)
JOIN public.suppliers s ON s.business_name = v.supplier_name
JOIN public.categories c ON c.path = v.cat_path::ltree;