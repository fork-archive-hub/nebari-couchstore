initSidebarItems({"constant":[["PAGE_SIZE","The number of bytes in each page on-disk."]],"enum":[["BTreeNode","A B-Tree entry that stores a list of key-`Index` pairs."],["KeyOperation","An operation to perform on a key."],["Operation","An operation that is performed on a set of keys."],["PageHeader","The header byte for a tree file’s page."],["PersistenceMode","Controls the persistence guarantees of write operations."],["Pointer","A pointer to a location on-disk. May also contain the node already loaded."],["ScanEvaluation","The result of evaluating a key or node that was scanned."]],"struct":[["ActiveState","An active state for a tree file."],["BTreeEntry","A B-Tree entry that stores a list of key-`Index` pairs."],["BorrowedRange","A borrowed range in byte form."],["ByIdStats","The reduced index of both [`VersionedByIdIndex`] and [`UnversionedByIdIndex`]"],["BySequenceIndex","The index stored within `VersionedTreeRoot::by_sequence_root`."],["BySequenceStats","The reduced index of [`BySequenceIndex`]."],["CompareSwap","A wrapper for a [`CompareSwapFn`]."],["Interior","An interior B-Tree node. Does not contain values directly, and instead points to a node located on-disk elsewhere."],["KeyEntry","An entry for a key. Stores a single index value for a single key."],["KeyRange","One or more keys."],["KeySequence","A stored revision of a key."],["Modification","A tree modification."],["PagedWriter","Writes data in pages, allowing for quick scanning through the file."],["SequenceId","A unique ID of a single modification to a key in a versioned tree file."],["State","The current state of a tree file. Must be initialized before passing to `TreeFile::new` if the file already exists."],["TransactableCompaction","A compaction process that runs in concert with a transaction manager."],["TreeFile","An append-only tree file."],["TreeRoot","A named tree with a specific root type."],["U64Range","A range of u64 values that is able to be used as keys in a tree scan, once borrowed."],["UnversionedByIdIndex","The index stored within `UnversionedTreeRoot::by_id_root`."],["UnversionedTreeRoot","A versioned B-Tree root. This tree root internally uses two btrees, one to keep track of all writes using a unique “sequence” ID, and one that keeps track of all key-value pairs."],["VersionedByIdIndex","The index stored within `VersionedTreeRoot::by_id_root`."],["VersionedTreeRoot","A versioned B-Tree root. This tree root internally uses two btrees, one to keep track of all writes using a unique “sequence” ID, and one that keeps track of all key-value pairs."]],"trait":[["AnyTreeRoot","A named tree that can be used in a transaction."],["BorrowByteRange","Borrows a range."],["EmbeddedIndex","An index that is embeddable within a tree."],["Reducer","Reduces one or more `Index`es or instances of `Self` into a single `Self` value."],["Root","A B-Tree root implementation."],["Serializable","A type that can be serialized and deserialized."],["ValueIndex","An index that serializes a value to the file."]],"type":[["CompareSwapFn","A function that is allowed to check the current value of a key and determine how to operate on it. The first parameter is the key, and the second parameter is the current value, if present."],["Unversioned","An unversioned tree with no additional indexed data."],["Versioned","An versioned tree with no additional indexed data."]]});