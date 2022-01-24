(function() {var implementors = {};
implementors["nebari"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/io/fs/struct.StdFileManager.html\" title=\"struct nebari::io::fs::StdFileManager\">StdFileManager</a>","synthetic":false,"types":["nebari::io::fs::StdFileManager"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/io/memory/struct.MemoryFileManager.html\" title=\"struct nebari::io::memory::MemoryFileManager\">MemoryFileManager</a>","synthetic":false,"types":["nebari::io::memory::MemoryFileManager"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/io/struct.PathIds.html\" title=\"struct nebari::io::PathIds\">PathIds</a>","synthetic":false,"types":["nebari::io::PathIds"]},{"text":"impl&lt;File:&nbsp;<a class=\"trait\" href=\"nebari/io/trait.ManagedFile.html\" title=\"trait nebari::io::ManagedFile\">ManagedFile</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/struct.Roots.html\" title=\"struct nebari::Roots\">Roots</a>&lt;File&gt;","synthetic":false,"types":["nebari::roots::Roots"]},{"text":"impl&lt;Root:&nbsp;<a class=\"trait\" href=\"nebari/tree/trait.Root.html\" title=\"trait nebari::tree::Root\">Root</a>, File:&nbsp;<a class=\"trait\" href=\"nebari/io/trait.ManagedFile.html\" title=\"trait nebari::io::ManagedFile\">ManagedFile</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/struct.Tree.html\" title=\"struct nebari::Tree\">Tree</a>&lt;Root, File&gt;","synthetic":false,"types":["nebari::roots::Tree"]},{"text":"impl&lt;File:&nbsp;<a class=\"trait\" href=\"nebari/io/trait.ManagedFile.html\" title=\"trait nebari::io::ManagedFile\">ManagedFile</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/struct.ThreadPool.html\" title=\"struct nebari::ThreadPool\">ThreadPool</a>&lt;File&gt;","synthetic":false,"types":["nebari::roots::ThreadPool"]},{"text":"impl&lt;Manager:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"nebari/io/trait.FileManager.html\" title=\"trait nebari::io::FileManager\">FileManager</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/transaction/struct.TransactionManager.html\" title=\"struct nebari::transaction::TransactionManager\">TransactionManager</a>&lt;Manager&gt;","synthetic":false,"types":["nebari::transaction::manager::TransactionManager"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/transaction/struct.State.html\" title=\"struct nebari::transaction::State\">State</a>","synthetic":false,"types":["nebari::transaction::state::State"]},{"text":"impl&lt;Index:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, ReducedIndex:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.BTreeEntry.html\" title=\"struct nebari::tree::BTreeEntry\">BTreeEntry</a>&lt;Index, ReducedIndex&gt;","synthetic":false,"types":["nebari::tree::btree_entry::BTreeEntry"]},{"text":"impl&lt;Index:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, ReducedIndex:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"nebari/tree/enum.BTreeNode.html\" title=\"enum nebari::tree::BTreeNode\">BTreeNode</a>&lt;Index, ReducedIndex&gt;","synthetic":false,"types":["nebari::tree::btree_entry::BTreeNode"]},{"text":"impl&lt;EmbeddedIndex:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"nebari/tree/trait.EmbeddedIndex.html\" title=\"trait nebari::tree::EmbeddedIndex\">EmbeddedIndex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.VersionedByIdIndex.html\" title=\"struct nebari::tree::VersionedByIdIndex\">VersionedByIdIndex</a>&lt;EmbeddedIndex&gt;","synthetic":false,"types":["nebari::tree::by_id::VersionedByIdIndex"]},{"text":"impl&lt;EmbeddedIndex:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"nebari/tree/trait.EmbeddedIndex.html\" title=\"trait nebari::tree::EmbeddedIndex\">EmbeddedIndex</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.UnversionedByIdIndex.html\" title=\"struct nebari::tree::UnversionedByIdIndex\">UnversionedByIdIndex</a>&lt;EmbeddedIndex&gt;","synthetic":false,"types":["nebari::tree::by_id::UnversionedByIdIndex"]},{"text":"impl&lt;EmbeddedStats:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.ByIdStats.html\" title=\"struct nebari::tree::ByIdStats\">ByIdStats</a>&lt;EmbeddedStats&gt;","synthetic":false,"types":["nebari::tree::by_id::ByIdStats"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.BySequenceIndex.html\" title=\"struct nebari::tree::BySequenceIndex\">BySequenceIndex</a>","synthetic":false,"types":["nebari::tree::by_sequence::BySequenceIndex"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.BySequenceStats.html\" title=\"struct nebari::tree::BySequenceStats\">BySequenceStats</a>","synthetic":false,"types":["nebari::tree::by_sequence::BySequenceStats"]},{"text":"impl&lt;Index:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, ReducedIndex:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.Interior.html\" title=\"struct nebari::tree::Interior\">Interior</a>&lt;Index, ReducedIndex&gt;","synthetic":false,"types":["nebari::tree::interior::Interior"]},{"text":"impl&lt;Index:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, ReducedIndex:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"nebari/tree/enum.Pointer.html\" title=\"enum nebari::tree::Pointer\">Pointer</a>&lt;Index, ReducedIndex&gt;","synthetic":false,"types":["nebari::tree::interior::Pointer"]},{"text":"impl&lt;Index:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.KeyEntry.html\" title=\"struct nebari::tree::KeyEntry\">KeyEntry</a>&lt;Index&gt;","synthetic":false,"types":["nebari::tree::key_entry::KeyEntry"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"nebari/tree/trait.Root.html\" title=\"trait nebari::tree::Root\">Root</a>, File:&nbsp;<a class=\"trait\" href=\"nebari/io/trait.ManagedFile.html\" title=\"trait nebari::io::ManagedFile\">ManagedFile</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.TreeRoot.html\" title=\"struct nebari::tree::TreeRoot\">TreeRoot</a>&lt;R, File&gt;","synthetic":false,"types":["nebari::tree::root::TreeRoot"]},{"text":"impl&lt;Root:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"nebari/tree/trait.Root.html\" title=\"trait nebari::tree::Root\">Root</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.State.html\" title=\"struct nebari::tree::State\">State</a>&lt;Root&gt;","synthetic":false,"types":["nebari::tree::state::State"]},{"text":"impl&lt;Root:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"nebari/tree/trait.Root.html\" title=\"trait nebari::tree::Root\">Root</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.ActiveState.html\" title=\"struct nebari::tree::ActiveState\">ActiveState</a>&lt;Root&gt;","synthetic":false,"types":["nebari::tree::state::ActiveState"]},{"text":"impl&lt;Index:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.UnversionedTreeRoot.html\" title=\"struct nebari::tree::UnversionedTreeRoot\">UnversionedTreeRoot</a>&lt;Index&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Index: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"nebari/tree/trait.EmbeddedIndex.html\" title=\"trait nebari::tree::EmbeddedIndex\">EmbeddedIndex</a> + <a class=\"trait\" href=\"nebari/tree/trait.Reducer.html\" title=\"trait nebari::tree::Reducer\">Reducer</a>&lt;Index&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + 'static,&nbsp;</span>","synthetic":false,"types":["nebari::tree::unversioned::UnversionedTreeRoot"]},{"text":"impl&lt;EmbeddedIndex:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/tree/struct.VersionedTreeRoot.html\" title=\"struct nebari::tree::VersionedTreeRoot\">VersionedTreeRoot</a>&lt;EmbeddedIndex&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EmbeddedIndex: <a class=\"trait\" href=\"nebari/tree/trait.EmbeddedIndex.html\" title=\"trait nebari::tree::EmbeddedIndex\">EmbeddedIndex</a>,&nbsp;</span>","synthetic":false,"types":["nebari::tree::versioned::VersionedTreeRoot"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"nebari/tree/enum.KeyEvaluation.html\" title=\"enum nebari::tree::KeyEvaluation\">KeyEvaluation</a>","synthetic":false,"types":["nebari::tree::KeyEvaluation"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/struct.ChunkCache.html\" title=\"struct nebari::ChunkCache\">ChunkCache</a>","synthetic":false,"types":["nebari::chunk_cache::ChunkCache"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"nebari/io/trait.FileManager.html\" title=\"trait nebari::io::FileManager\">FileManager</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"nebari/struct.Context.html\" title=\"struct nebari::Context\">Context</a>&lt;M&gt;","synthetic":false,"types":["nebari::context::Context"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()