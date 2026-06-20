// datos.js - Base de Datos Oficial (Fútbol, Ecuavoley y Basketball)
const jorndasDeportivasData = {
    disciplinas: {
        futbol: {
            nombre: "Fútbol",
            categorias: {
                master: {
                    nombre: "Máster",
                    equipos: [
                        { id: "m_leyendas_2004", nombre: "LEYENDAS 2004", pj: 7, gd: 1, pts: 13 },
                        { id: "m_la_colacion_sub40", nombre: "CMC LA COLACION SUB 40", pj: 7, gd: -8, pts: 7 },
                        { id: "m_escolta_metro", nombre: "ESCOLTA METROPOLITANA", pj: 8, gd: +22, pts: 21 },
                        { id: "m_gats_calcibon", nombre: "GAT-S MÁSTER (LOS CALCIBON)", pj: 7, gd: +15, pts: 18 },
                        { id: "m_transportes", nombre: "TRANSPORTES", pj: 7, gd: +17, pts: 16 },
                        { id: "m_los_12_mas_1", nombre: "LOS 12+1", pj: 7, gd: -12, pts: 4 },
                        { id: "m_nottingham_miedo", nombre: "ATLETICO IESS NOTTINGHAN-MIEDO", pj: 7, gd: +8, pts: 10 },
                        { id: "m_transportes_caf", nombre: "TRANSPORTES CAF", pj: 8, gd: -21, pts: 4 },
                        { id: "m_metros_galacticos", nombre: "LOS METROS GALÁCTICOS", pj: 7, gd: -16, pts: 3 }
                    ]
                },
                senior: {
                    nombre: "Senior",
                    grupoA: [
                        { id: "s_a_k_ninos", nombre: "K-NINOS", pj: 5, gd: -11, pts: 4 },
                        { id: "s_a_administrativos", nombre: "ADMINISTRATIVOS", pj: 5, gd: -8, pts: 7 },
                        { id: "s_a_fila_1", nombre: "FILA 1", pj: 5, gd: +21, pts: 13 },
                        { id: "s_a_fila_2", nombre: "FILA 2", pj: 5, gd: 5, pts: 8 },
                        { id: "s_a_gats_lobos", nombre: "GAT-S A ( LOS LOBOS)", pj: 6, gd: -8, pts: 5 },
                        { id: "s_a_gats_barnys", nombre: "GAT-S B (LOS BARNYS)", pj: 5, gd: 8, pts: 10 },
                        { id: "s_a_cmc_ecu911", nombre: "CMC Y ECU 911", pj: 5, gd: -9, pts: 2 }
                    ],
                    grupoB: [
                        { id: "s_b_gam", nombre: "GAM", pj: 5, gd: 12, pts: 10 },
                        { id: "s_b_transporte_publico", nombre: "TRANSPORTE PÚBLICO", pj: 5, gd: 2, pts: 8 },
                        { id: "s_b_mala_fama_united", nombre: "MALA FAMA UNITED", pj: 5, gd: -11, pts: 7 },
                        { id: "s_b_rescate", nombre: "RESCATE", pj: 5, gd: -4, pts: 6 },
                        { id: "s_b_turismo", nombre: "TURISMO", pj: 5, gd: +28, pts: 7 },
                        { id: "s_b_caballeria_fc", nombre: "CABALLERIA FC", pj: 5, gd: -17, pts: 4 }
                    ]
                },
                femenino: {
                    nombre: "Femenino",
                    equipos: [
                        { id: "f_manuela_saenz", nombre: "U.O.Z MANUELA SÁENZ", pj: 5, gd: +3, pts: 6 },
                        { id: "f_transporte_publico", nombre: "TRANSPORTE PÚBLICO", pj: 5, gd: 0, pts: 4 },
                        { id: "f_gats_femenino", nombre: "GAT-S FEMENINO", pj: 5, gd: +16, pts: 13 },
                        { id: "f_administrativos", nombre: "ADMINISTRATIVOS", pj: 5, gd: -19, pts: 3 }
                    ]
                }
            }
        },
        ecuavoley: {
            nombre: "Ecuavoley",
            categorias: {
                unico: {
                    nombre: "Categoría Única",
                    equipos: [
                        { id: "e_los_alcones", nombre: "LOS ALCONES", pj: 7, qg: 7, qp: 0, pts: 18 },
                        { id: "e_spartans", nombre: "SPARTANS", pj: 7, qg: 5, qp: 2, pts: 15 },
                        { id: "e_unidad_tic", nombre: "UNIDAD TIC", pj: 7, qg: 6, qp: 1, pts: 16 },
                        { id: "e_gallos", nombre: "GALLOS", pj: 7, qg: 3, qp: 3, pts: 9 },
                        { id: "e_tauros", nombre: "TAUROS", pj: 6, qg: 5, qp: 1, pts: 15 },
                        { id: "e_titanes_ecuavoley", nombre: "LOS TITANES DEL ECUAVOLEY", pj: 7, qg: 1, qp: 6, pts: 3 },
                        { id: "e_bate_y_sale", nombre: "BATE Y SALE", pj: 6, qg: 2, qp: 4, pts: 7 },
                        { id: "e_transporte_publico", nombre: "TRANSPORTE PÚBLICO", pj: 7, qg: 0, qp: 7, pts: 1 },
                        { id: "e_solo_panas", nombre: "SOLO PANAS", pj: 7, qg: 2, qp: 5, pts: 4 },                       
                    ]
                }
            }
        },
        basketball: {
            nombre: "Basketball",
            categorias: {
                unico: {
              equipos: [
                    { id: "b_metritos_space", nombre: "METRITOS SPACE JAM", pj: 2, pg: 2, pp: 0, pf: 57, pc: 34, dif: 23, pts: 4 },
                    { id: "b_master_mix", nombre: "MASTER MIX", pj: 2, pg: 1, pp: 1, pf: 44, pc: 48, dif: -4, pts: 2 },
                    { id: "b_alfas", nombre: "ALFA METRITOS", pj: 2, pg: 1, pp: 1, pf: 36, pc: 40, dif: -4, pts: 2 },
                    { id: "b_nsj", nombre: "NSJ", pj: 2, pg: 0, pp: 2, pf: 30, pc: 45, dif: -15, pts: 0 }
                  ]
                }
            }
        }
    } 
    };

if (typeof module !== 'undefined' && module.exports) {
    module.exports = jorndasDeportivasData;
}