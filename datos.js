// datos.js - Base de Datos Oficial (Fútbol, Ecuavoley y Basketball)
const jorndasDeportivasData = {
    disciplinas: {
        futbol: {
            nombre: "Fútbol",
            categorias: {
                master: {
                    nombre: "Máster",
                    equipos: [
                        { id: "m_leyendas_2004", nombre: "LEYENDAS 2004", pj: 1, gd: +3, pts: 3 },
                        { id: "m_la_colacion_sub40", nombre: "CMC LA COLACION SUB 40", pj: 2, gd: -8, pts: 0 },
                        { id: "m_escolta_metro", nombre: "ESCOLTA METROPOLITANA", pj: 2, gd: +5, pts: 6 },
                        { id: "m_gats_calcibon", nombre: "GAT-S MÁSTER (LOS CALCIBON)", pj: 2, gd: +5, pts: 6 },
                        { id: "m_transportes", nombre: "TRANSPORTES", pj: 2, gd: +7, pts: 6 },
                        { id: "m_los_12_mas_1", nombre: "LOS 12+1", pj: 2, gd: -7, pts: 0 },
                        { id: "m_nottingham_miedo", nombre: "ATLETICO IESS NOTTINGHAN-MIEDO", pj: 1, gd: +7, pts: 3 },
                        { id: "m_transportes_caf", nombre: "TRANSPORTES CAF", pj: 2, gd: -6, pts: 0 },
                        { id: "m_metros_galacticos", nombre: "LOS METROS GALÁCTICOS", pj: 2, gd: -8, pts: 0 }
                    ]
                },
                senior: {
                    nombre: "Senior",
                    grupoA: [
                        { id: "s_a_k_ninos", nombre: "K-NINOS", pj: 1, gd: -3, pts: 0 },
                        { id: "s_a_administrativos", nombre: "ADMINISTRATIVOS", pj: 1, gd: +3, pts: 3 },
                        { id: "s_a_fila_1", nombre: "FILA 1", pj: 1, gd: +1, pts: 3 },
                        { id: "s_a_fila_2", nombre: "FILA 2", pj: 1, gd: 0, pts: 1 },
                        { id: "s_a_gats_lobos", nombre: "GAT-S A ( LOS LOBOS)", pj: 1, gd: -1, pts: 0 },
                        { id: "s_a_gats_barnys", nombre: "GAT-S B (LOS BARNYS)", pj: 1, gd: 0, pts: 1 },
                        { id: "s_a_cmc_ecu911", nombre: "CMC Y ECU 911", pj: 2, gd: 0, pts: 2 }
                    ],
                    grupoB: [
                        { id: "s_b_gam", nombre: "GAM", pj: 1, gd: 0, pts: 1 },
                        { id: "s_b_transporte_publico", nombre: "TRANSPORTE PÚBLICO", pj: 1, gd: 0, pts: 1 },
                        { id: "s_b_mala_fama_united", nombre: "MALA FAMA UNITED", pj: 1, gd: +2, pts: 3 },
                        { id: "s_b_rescate", nombre: "RESCATE", pj: 1, gd: -2, pts: 0 },
                        { id: "s_b_turismo", nombre: "TURISMO", pj: 1, gd: +11, pts: 3 },
                        { id: "s_b_caballeria_fc", nombre: "CABALLERIA FC", pj: 1, gd: -11, pts: 0 }
                    ]
                },
                femenino: {
                    nombre: "Femenino",
                    equipos: [
                        { id: "f_manuela_saenz", nombre: "U.O.Z MANUELA SÁENZ", pj: 1, gd: +5, pts: 3 },
                        { id: "f_transporte_publico", nombre: "TRANSPORTE PÚBLICO", pj: 1, gd: -3, pts: 0 },
                        { id: "f_gats_femenino", nombre: "GAT-S FEMENINO", pj: 1, gd: +3, pts: 3 },
                        { id: "f_administrativos", nombre: "ADMINISTRATIVOS", pj: 1, gd: -5, pts: 0 }
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
                        { id: "e_los_alcones", nombre: "LOS ALCONES", pj: 2, qg: 0, qp: 0, pts: 5 },
                        { id: "e_unidad_tic", nombre: "UNIDAD TIC", pj: 2, qg: 0, qp: 0, pts: 5 },
                        { id: "e_gallos", nombre: "GALLOS", pj: 2, qg: 0, qp: 0, pts: 3 },
                        { id: "e_tauros", nombre: "TAUROS", pj: 1, qg: 0, qp: 0, pts: 3 },
                        { id: "e_titanes_ecuavoley", nombre: "LOS TITANES DEL ECUAVOLEY", pj: 2, qg: 0, qp: 0, pts: 3 },
                        { id: "e_transporte_publico", nombre: "TRANSPORTE PÚBLICO", pj: 2, qg: 0, qp: 0, pts: 1 },
                        { id: "e_bate_y_sale", nombre: "BATE Y SALE", pj: 1, qg: 0, qp: 0, pts: 1 },
                        { id: "e_solo_panas", nombre: "SOLO PANAS", pj: 1, qg: 0, qp: 0, pts: 0 },
                        { id: "e_spartans", nombre: "SPARTANS", pj: 1, qg: 0, qp: 0, pts: 0 },
                        
                    ]
                }
            }
        },
        basketball: {
            nombre: "Basketball",
            categorias: {
                unico: {
                    nombre: "Categoría Única",
                    equipos: [
                        { id: "b_metritos_space", nombre: "METRITOS SPACE JAM", pj: 0, pg: 0, pp: 0, pts: 0 },
                        { id: "b_nsj", nombre: "NSJ", pj: 0, pg: 0, pp: 0, pts: 0 },
                        { id: "b_alfas", nombre: "Alfas", pj: 0, pg: 0, pp: 0, pts: 0 },
                        { id: "b_master_mix", nombre: "MASTER MIX", pj: 0, pg: 0, pp: 0, pts: 0 }
                    ]
                }
            }
        }
    } 
    };

if (typeof module !== 'undefined' && module.exports) {
    module.exports = jorndasDeportivasData;
}