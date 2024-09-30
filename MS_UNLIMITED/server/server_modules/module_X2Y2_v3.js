[
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_addressProvider",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "InvalidBorrowAsset",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "InvalidBorrowDuration",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidBrokerSignature",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidBrokerSigner",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidCaller",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidLenderSignature",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "InvalidNftAsset",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidNftId",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidProof",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidRepayamount",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "InvalidRole",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidSignature",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidTimestamp",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "name": "LoanIsExpired",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "name": "LoanNotActive",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "name": "LoanNotOverdue",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "MismatchNonceTotal",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "NonceUsedup",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "OfferAmountExceeded",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "OfferIsCancelled",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "name": "OnlyLenderCanLiquidate",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "OnlySignerCanCancelOffer",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ReentrancyError",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "TargetCallFailed",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "TargetNotAllowed",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "loanId",
                "type": "uint32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "referral",
                "type": "uint256"
            }
        ],
        "name": "BorrowRefferal",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "loanId",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "nft",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nftTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "flashTarget",
                "type": "address"
            }
        ],
        "name": "FlashExecute",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "loanId",
                "type": "uint32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "lender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "borrowAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nftTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loanMaturityDate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "loanLiquidationDate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "nftAsset",
                "type": "address"
            }
        ],
        "name": "LoanLiquidated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "loanId",
                "type": "uint32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "lender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "borrowAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nftTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "repayAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "adminFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "nftAsset",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "borrowAsset",
                "type": "address"
            }
        ],
        "name": "LoanRepaid",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "loanId",
                "type": "uint32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "lender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "borrowAsset",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "nftAsset",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "offerType",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "offerHash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "amount",
                "type": "uint16"
            },
            {
                "components": [
                    {
                        "internalType": "enum StatusType",
                        "name": "state",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint64",
                        "name": "reserved",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint32",
                        "name": "loanDuration",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "adminShare",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint64",
                        "name": "loanStart",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint8",
                        "name": "borrowAssetIndex",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint32",
                        "name": "nftAssetIndex",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint112",
                        "name": "borrowAmount",
                        "type": "uint112"
                    },
                    {
                        "internalType": "uint112",
                        "name": "repayAmount",
                        "type": "uint112"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nftTokenId",
                        "type": "uint256"
                    }
                ],
                "indexed": false,
                "internalType": "struct LoanDetail",
                "name": "loanDetail",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes4",
                        "name": "selector",
                        "type": "bytes4"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "referral",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "onBehalf",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "proof",
                        "type": "bytes32[]"
                    }
                ],
                "indexed": false,
                "internalType": "struct CallData",
                "name": "extraData",
                "type": "tuple"
            }
        ],
        "name": "LoanStarted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "lender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "offerHash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "counter",
                "type": "uint256"
            }
        ],
        "name": "OfferCancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "loanId",
                "type": "uint32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "serviceFeeRate",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "feeAmount",
                "type": "uint256"
            }
        ],
        "name": "ServiceFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint32",
                "name": "loanId",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "enum StatusType",
                "name": "newStatus",
                "type": "uint8"
            }
        ],
        "name": "UpdateStatus",
        "type": "event"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "enum ItemType",
                        "name": "itemType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "repayAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "nftAsset",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "borrowAsset",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint32",
                        "name": "borrowDuration",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "validUntil",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "amount",
                        "type": "uint32"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes",
                                "name": "signature",
                                "type": "bytes"
                            }
                        ],
                        "internalType": "struct Signature",
                        "name": "signature",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct Offer",
                "name": "_offer",
                "type": "tuple"
            },
            {
                "internalType": "uint256",
                "name": "_nftId",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "signer",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct Signature",
                "name": "_brokerSignature",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes4",
                        "name": "selector",
                        "type": "bytes4"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint256",
                        "name": "referral",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "onBehalf",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "proof",
                        "type": "bytes32[]"
                    }
                ],
                "internalType": "struct CallData",
                "name": "_extraData",
                "type": "tuple"
            }
        ],
        "name": "borrow",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "enum ItemType",
                        "name": "itemType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "repayAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "nftAsset",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "borrowAsset",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint32",
                        "name": "borrowDuration",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "validUntil",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "amount",
                        "type": "uint32"
                    },
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes",
                                "name": "signature",
                                "type": "bytes"
                            }
                        ],
                        "internalType": "struct Signature",
                        "name": "signature",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct Offer",
                "name": "_offer",
                "type": "tuple"
            }
        ],
        "name": "cancelOffer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_loanId",
                "type": "uint32"
            }
        ],
        "name": "getRepayAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getUserCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "increaseCounter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_loanId",
                "type": "uint32"
            }
        ],
        "name": "liquidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_loanId",
                "type": "uint32"
            }
        ],
        "name": "loanDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "enum StatusType",
                        "name": "state",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint64",
                        "name": "reserved",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint32",
                        "name": "loanDuration",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "adminShare",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint64",
                        "name": "loanStart",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint8",
                        "name": "borrowAssetIndex",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint32",
                        "name": "nftAssetIndex",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint112",
                        "name": "borrowAmount",
                        "type": "uint112"
                    },
                    {
                        "internalType": "uint112",
                        "name": "repayAmount",
                        "type": "uint112"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nftTokenId",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct LoanDetail",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_loanId",
                "type": "uint32"
            }
        ],
        "name": "loanState",
        "outputs": [
            {
                "internalType": "enum StatusType",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_sender",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_param",
                "type": "bytes"
            }
        ],
        "name": "repay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_loanId",
                "type": "uint32"
            }
        ],
        "name": "repay",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]