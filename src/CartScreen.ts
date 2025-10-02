export const CartScreen = `{
  "states": {},
  "root": {
    "kind": "scaffold",
    "body": [
      {
        "kind": "spacer",
        "properties": {}
      },
      {
        "kind": "column",
        "properties": {},
        "body": [
          {
            "kind": "row",
            "properties": {
              "spacing": 12,
              "valign": "center",
              "paddingTop": 12,
              "paddingBottom": 8,
              "paddingLeft": 16,
              "paddingRight": 16
            },
            "body": [
              {
                "kind": "checkbox"
              },
              {
                "kind": "text",
                "properties": {
                  "value": "Выбрать всё"
                }
              },
              {
                "kind": "spacer",
                "properties": {
                  "weight": 1
                }
              },
              {
                "kind": "textbutton",
                "properties": {},
                "body": [
                  {
                    "kind": "text",
                    "properties": {
                      "value": "Удалить (3)",
                      "textStyle": "m10",
                      "textColor": "accent"
                    }
                  }
                ]
              }
            ]
          },
          {
            "kind": "column",
            "properties": {
              "paddingBottom": 24
            },
            "body": [
              {
                "kind": "row",
                "properties": {
                  "spacing": 12,
                  "valign": "center",
                  "paddingLeft": 16,
                  "paddingRight": 16,
                  "paddingBottom": 16
                },
                "body": [
                  {
                    "kind": "checkbox"
                  },
                  {
                    "kind": "row",
                    "properties": {
                      "spacing": 5,
                      "valign": "bottom"
                    },
                    "body": [
                      {
                        "kind": "text",
                        "properties": {
                          "value": "Pear Store",
                          "textStyle": "h30"
                        }
                      },
                      {
                        "kind": "row",
                        "properties": {
                          "spacing": 2,
                          "valign": "center"
                        },
                        "body": [
                          {
                            "kind": "icon",
                            "properties": {
                              "iconId": "rating",
                              "fill": "orange",
                              "size": 16
                            }
                          },
                          {
                            "kind": "text",
                            "properties": {
                              "value": "4.8"
                            }
                          },
                          {
                            "kind": "text",
                            "properties": {
                              "value": "(643)",
                              "textColor": "variant"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "container",
                "properties": {
                  "background": "variant",
                  "borderRadius": 24,
                  "paddingTop": 24,
                  "paddingBottom": 32
                },
                "body": [
                  {
                    "kind": "column",
                    "properties": {},
                    "body": [
                      {
                        "kind": "column",
                        "properties": {
                          "spacing": 24
                        },
                        "body": [
                          {
                            "kind": "row",
                            "properties": {
                              "spacing": 12,
                              "paddingLeft": 16,
                              "paddingRight": 16
                            },
                            "body": [
                              {
                                "kind": "checkbox"
                              },
                              {
                                "kind": "image",
                                "properties": {
                                  "url": "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  "width": 96,
                                  "height": 96,
                                  "borderRadius": 12
                                }
                              },
                              {
                                "kind": "column",
                                "properties": {
                                  "weight": 1
                                },
                                "body": [
                                  {
                                    "kind": "text",
                                    "properties": {
                                      "value": "4 990 ₽",
                                      "textStyle": "h40",
                                      "paddingBottom": 2
                                    }
                                  },
                                  {
                                    "kind": "text",
                                    "properties": {
                                      "value": "Зарядка MagSafe Charger 15W 1 метр",
                                      "textStyle": "s20",
                                      "paddingBottom": 10
                                    }
                                  },
                                  {
                                    "kind": "stepper",
                                    "properties": {
                                      "value": 1,
                                      "paddingBottom": 10
                                    }
                                  },
                                  {
                                    "kind": "textbutton",
                                    "properties": {},
                                    "body": [
                                      {
                                        "kind": "text",
                                        "properties": {
                                          "value": "Купить с доставкой",
                                          "textStyle": "s10",
                                          "textColor": "pay"
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "kind": "column",
                                "properties": {},
                                "body": [
                                  {
                                    "kind": "iconbutton",
                                    "properties": {},
                                    "body": [
                                      {
                                        "kind": "icon",
                                        "properties": {
                                          "iconId": "favorite",
                                          "size": 20
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "kind": "iconbutton",
                                    "properties": {},
                                    "body": [
                                      {
                                        "kind": "icon",
                                        "properties": {
                                          "iconId": "delete",
                                          "size": 20
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "kind": "row",
                            "properties": {
                              "spacing": 12,
                              "paddingLeft": 16,
                              "paddingRight": 16
                            },
                            "body": [
                              {
                                "kind": "checkbox"
                              },
                              {
                                "kind": "image",
                                "properties": {
                                  "url": "https://images.unsplash.com/photo-1623788736363-55d36908ab21?q=80&w=732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                  "width": 96,
                                  "height": 96,
                                  "borderRadius": 12
                                }
                              },
                              {
                                "kind": "column",
                                "properties": {
                                  "weight": 1
                                },
                                "body": [
                                  {
                                    "kind": "text",
                                    "properties": {
                                      "value": "15 990 ₽",
                                      "textStyle": "h40",
                                      "paddingBottom": 2
                                    }
                                  },
                                  {
                                    "kind": "text",
                                    "properties": {
                                      "value": "AirPods Pro 2",
                                      "textStyle": "s20",
                                      "paddingBottom": 10
                                    }
                                  },
                                  {
                                    "kind": "stepper",
                                    "properties": {
                                      "value": 1,
                                      "paddingBottom": 10
                                    }
                                  },
                                  {
                                    "kind": "textbutton",
                                    "properties": {},
                                    "body": [
                                      {
                                        "kind": "text",
                                        "properties": {
                                          "value": "Купить с доставкой",
                                          "textStyle": "s10",
                                          "textColor": "pay"
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "kind": "column",
                                "properties": {},
                                "body": [
                                  {
                                    "kind": "iconbutton",
                                    "properties": {},
                                    "body": [
                                      {
                                        "kind": "icon",
                                        "properties": {
                                          "iconId": "favorite",
                                          "size": 20
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "kind": "iconbutton",
                                    "properties": {},
                                    "body": [
                                      {
                                        "kind": "icon",
                                        "properties": {
                                          "iconId": "delete",
                                          "size": 20
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "row",
                        "properties": {
                          "spacing": 6,
                          "paddingLeft": 16,
                          "paddingRight": 16,
                          "paddingTop": 20
                        },
                        "body": [
                          {
                            "kind": "icon",
                            "properties": {
                              "iconId": "corner-down-right",
                              "size": 24
                            }
                          },
                          {
                            "kind": "column",
                            "properties": {
                              "paddingTop": 4
                            },
                            "body": [
                              {
                                "kind": "row",
                                "properties": {},
                                "body": [
                                  {
                                    "kind": "text",
                                    "properties": {
                                      "value": "Добавить ещё 1 товар до скидки 5%",
                                      "textStyle": "h60"
                                    }
                                  },
                                  {
                                    "kind": "icon",
                                    "properties": {
                                      "iconId": "chevron-right",
                                      "size": 16
                                    }
                                  }
                                ]
                              },
                              {
                                "kind": "scrollable_row",
                                "properties": {
                                  "paddingTop": 16
                                },
                                "body": [
                                  {
                                    "kind": "row",
                                    "properties": {
                                      "spacing": 16
                                    },
                                    "body": [
                                      {
                                        "kind": "row",
                                        "properties": {
                                          "spacing": 12
                                        },
                                        "body": [
                                          {
                                            "kind": "image",
                                            "properties": {
                                              "url": "https://images.unsplash.com/photo-1616353329366-b5546ca70b1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                              "width": 96,
                                              "height": 96,
                                              "borderRadius": 12
                                            }
                                          },
                                          {
                                            "kind": "column",
                                            "properties": {},
                                            "body": [
                                              {
                                                "kind": "row",
                                                "properties": {
                                                  "spacing": 6,
                                                  "valign": "center",
                                                  "paddingBottom": 2
                                                },
                                                "body": [
                                                  {
                                                    "kind": "text",
                                                    "properties": {
                                                      "value": "26 591 ₽",
                                                      "textStyle": "h50",
                                                      "singleLine": true
                                                    }
                                                  },
                                                  {
                                                    "kind": "text",
                                                    "properties": {
                                                      "value": "27 990 ₽",
                                                      "textStyle": "m20",
                                                      "textColor": "variant",
                                                      "singleLine": true,
                                                      "lineThrough": true
                                                    }
                                                  }
                                                ]
                                              },
                                              {
                                                "kind": "text",
                                                "properties": {
                                                  "value": "Apple Watch 10 42mm Blue",
                                                  "textStyle": "s20",
                                                  "paddingBottom": 10
                                                }
                                              },
                                              {
                                                "kind": "row",
                                                "properties": {},
                                                "body": [
                                                  {
                                                    "kind": "button",
                                                    "properties": {
                                                      "text": "В корзину",
                                                      "size": "xs",
                                                      "color": "overlay-secondary",
                                                      "disabled": false
                                                    }
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        "kind": "row",
                                        "properties": {
                                          "spacing": 12
                                        },
                                        "body": [
                                          {
                                            "kind": "image",
                                            "properties": {
                                              "url": "https://images.unsplash.com/photo-1628427141865-ef62f5125ea1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
                                              "width": 96,
                                              "height": 96,
                                              "borderRadius": 12
                                            }
                                          },
                                          {
                                            "kind": "column",
                                            "properties": {},
                                            "body": [
                                              {
                                                "kind": "row",
                                                "properties": {
                                                  "spacing": 6,
                                                  "valign": "center",
                                                  "paddingBottom": 2
                                                },
                                                "body": [
                                                  {
                                                    "kind": "text",
                                                    "properties": {
                                                      "value": "26 591 ₽",
                                                      "textStyle": "h50",
                                                      "singleLine": true
                                                    }
                                                  },
                                                  {
                                                    "kind": "text",
                                                    "properties": {
                                                      "value": "27 990 ₽",
                                                      "textStyle": "m20",
                                                      "textColor": "variant",
                                                      "singleLine": true,
                                                      "lineThrough": true
                                                    }
                                                  }
                                                ]
                                              },
                                              {
                                                "kind": "text",
                                                "properties": {
                                                  "value": "Apple Watch 10 42mm Brown",
                                                  "textStyle": "s20",
                                                  "paddingBottom": 10
                                                }
                                              },
                                              {
                                                "kind": "row",
                                                "properties": {},
                                                "body": [
                                                  {
                                                    "kind": "button",
                                                    "properties": {
                                                      "text": "В корзину",
                                                      "size": "xs",
                                                      "color": "overlay-secondary",
                                                      "disabled": false
                                                    }
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "column",
            "properties": {
              "paddingBottom": 24
            },
            "body": [
              {
                "kind": "row",
                "properties": {
                  "spacing": 12,
                  "valign": "center",
                  "paddingLeft": 16,
                  "paddingRight": 16,
                  "paddingBottom": 16
                },
                "body": [
                  {
                    "kind": "checkbox"
                  },
                  {
                    "kind": "row",
                    "properties": {
                      "spacing": 5,
                      "valign": "bottom"
                    },
                    "body": [
                      {
                        "kind": "text",
                        "properties": {
                          "value": "TECHNO ZONE",
                          "textStyle": "h30"
                        }
                      },
                      {
                        "kind": "row",
                        "properties": {
                          "spacing": 2,
                          "valign": "center"
                        },
                        "body": [
                          {
                            "kind": "icon",
                            "properties": {
                              "iconId": "rating",
                              "fill": "orange",
                              "size": 16
                            }
                          },
                          {
                            "kind": "text",
                            "properties": {
                              "value": "5"
                            }
                          },
                          {
                            "kind": "text",
                            "properties": {
                              "value": "(916)",
                              "textColor": "variant"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "column",
                "properties": {
                  "spacing": 24
                },
                "body": [
                  {
                    "kind": "row",
                    "properties": {
                      "spacing": 12,
                      "paddingLeft": 16,
                      "paddingRight": 16
                    },
                    "body": [
                      {
                        "kind": "checkbox"
                      },
                      {
                        "kind": "image",
                        "properties": {
                          "url": "https://images.techinsider.ru/upload/img_cache/891/891e36af018050a5f6510364d61156a0_ce_720x480x0x0_cropped_666x444.webp",
                          "width": 96,
                          "height": 96,
                          "borderRadius": 12
                        }
                      },
                      {
                        "kind": "column",
                        "properties": {
                          "weight": 1
                        },
                        "body": [
                          {
                            "kind": "text",
                            "properties": {
                              "value": "99 990 ₽",
                              "textStyle": "h40",
                              "paddingBottom": 2
                            }
                          },
                          {
                            "kind": "text",
                            "properties": {
                              "value": "IPhone 16 Pro, 256ГБ",
                              "textStyle": "s20",
                              "paddingBottom": 10
                            }
                          },
                          {
                            "kind": "stepper",
                            "properties": {
                              "preset": "overlay",
                              "value": 1,
                              "paddingBottom": 10
                            }
                          },
                          {
                            "kind": "textbutton",
                            "properties": {},
                            "body": [
                              {
                                "kind": "text",
                                "properties": {
                                  "value": "Купить с доставкой",
                                  "textStyle": "s10",
                                  "textColor": "pay"
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "column",
                        "properties": {},
                        "body": [
                          {
                            "kind": "iconbutton",
                            "properties": {},
                            "body": [
                              {
                                "kind": "icon",
                                "properties": {
                                  "iconId": "favorite",
                                  "size": 20
                                }
                              }
                            ]
                          },
                          {
                            "kind": "iconbutton",
                            "properties": {},
                            "body": [
                              {
                                "kind": "icon",
                                "properties": {
                                  "iconId": "delete",
                                  "size": 20
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "row",
        "properties": {
          "spacing": 6,
          "valign": "center"
        },
        "body": [
          {
            "kind": "column",
            "properties": {
              "weight": 1
            },
            "body": [
              {
                "kind": "text",
                "properties": {
                  "value": "3 товара",
                  "textStyle": "xs10"
                }
              },
              {
                "kind": "text",
                "properties": {
                  "value": "120 979 ₽",
                  "textStyle": "h30"
                }
              }
            ]
          },
          {
            "kind": "button",
            "properties": {
              "text": "Оформить доставку",
              "size": "l",
              "color": "pay",
              "disabled": false
            }
          }
        ]
      }
    ]
  }
}

`;